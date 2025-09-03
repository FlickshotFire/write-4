import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

const PremiumParticleSystem: React.FC<ParticleSystemProps> = ({ 
  particleCount = 2000,
  className = ""
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<THREE.Points | null>(null);

  // Premium color palette for particles
  const colors = useMemo(() => [
    new THREE.Color(0x00d4ff), // Electric Blue
    new THREE.Color(0xa855f7), // Electric Purple  
    new THREE.Color(0x00ffff), // Electric Cyan
    new THREE.Color(0xff00ff), // Electric Magenta
    new THREE.Color(0x8b5cf6), // Purple
    new THREE.Color(0x06b6d4), // Cyan
  ], []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup with premium settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create premium particle geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colorsArray = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Initialize particles with premium distribution
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position - create depth layers
      positions[i3] = (Math.random() - 0.5) * 200;     // x
      positions[i3 + 1] = (Math.random() - 0.5) * 200; // y  
      positions[i3 + 2] = (Math.random() - 0.5) * 100; // z

      // Colors - premium palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      colorsArray[i3] = color.r;
      colorsArray[i3 + 1] = color.g;
      colorsArray[i3 + 2] = color.b;

      // Sizes - varied for depth
      sizes[i] = Math.random() * 3 + 0.5;

      // Velocities - subtle movement
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Premium particle material with shader-like effects
    const material = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Create particle system
    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll interaction
    const handleScroll = () => {
      if (particlesRef.current) {
        const scrollY = window.scrollY * 0.001;
        particlesRef.current.rotation.x = scrollY * 0.5;
        particlesRef.current.rotation.y = scrollY * 0.3;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Premium animation loop
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position;
        const colors = particlesRef.current.geometry.attributes.color;
        
        // Update particle positions and colors
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Floating animation
          positions.array[i3 + 1] += Math.sin(time + i * 0.01) * 0.01;
          
          // Mouse interaction - particles attract to mouse
          const mouseInfluence = 0.02;
          const dx = mouseRef.current.x * 50 - positions.array[i3];
          const dy = mouseRef.current.y * 50 - positions.array[i3 + 1];
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 20) {
            positions.array[i3] += dx * mouseInfluence * (1 - distance / 20);
            positions.array[i3 + 1] += dy * mouseInfluence * (1 - distance / 20);
            
            // Color intensity based on proximity
            const intensity = 1 + (1 - distance / 20) * 2;
            colors.array[i3] = Math.min(colors.array[i3] * intensity, 1);
            colors.array[i3 + 1] = Math.min(colors.array[i3 + 1] * intensity, 1);
            colors.array[i3 + 2] = Math.min(colors.array[i3 + 2] * intensity, 1);
          }

          // Boundary wrapping
          if (positions.array[i3] > 100) positions.array[i3] = -100;
          if (positions.array[i3] < -100) positions.array[i3] = 100;
          if (positions.array[i3 + 1] > 100) positions.array[i3 + 1] = -100;
          if (positions.array[i3 + 1] < -100) positions.array[i3 + 1] = 100;
        }

        positions.needsUpdate = true;
        colors.needsUpdate = true;

        // Global rotation
        particlesRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [particleCount, colors]);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default PremiumParticleSystem;