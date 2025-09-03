import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
  speed?: number;
  size?: number;
}

export function ParticleBackground({ 
  particleCount = 100, 
  color = '#3b82f6', 
  speed = 0.001,
  size = 2 
}: ParticleBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      vertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }

    for (let i = 0; i < particleCount * 3; i++) {
      velocities.push((Math.random() - 0.5) * speed * 10);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      color: color,
      size: size,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      vertexColors: false
    });

    // Add some sparkle effect
    material.map = createSparkleTexture();

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 1000;

    // Add mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const index = Math.floor(i / 3);
        positions[i] += velocities[index] || 0;
        positions[i + 1] += velocities[index + particleCount] || 0;
        positions[i + 2] += velocities[index + particleCount * 2] || 0;

        // Wrap around screen
        if (positions[i] > 1000) positions[i] = -1000;
        if (positions[i] < -1000) positions[i] = 1000;
        if (positions[i + 1] > 1000) positions[i + 1] = -1000;
        if (positions[i + 1] < -1000) positions[i + 1] = 1000;
        if (positions[i + 2] > 1000) positions[i + 2] = -1000;
        if (positions[i + 2] < -1000) positions[i + 2] = 1000;
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.x += speed + mouseY * 0.00005;
      particles.rotation.y += speed * 0.5 + mouseX * 0.00005;
      
      // Add breathing effect
      const time = Date.now() * 0.001;
      particles.scale.setScalar(1 + Math.sin(time) * 0.1);

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();
    
    // Create sparkle texture
    function createSparkleTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.2, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    // Cleanup
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [particleCount, color, speed, size]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
}