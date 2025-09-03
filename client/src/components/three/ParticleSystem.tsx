import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  opacity: number;
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createParticles = useCallback((): Particle[] => {
    const particles: Particle[] = [];
    const colors = ['#00D4FF', '#8B5CF6', '#14B8A6', '#6366F1'];
    
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: (Math.random() - 0.5) * window.innerWidth,
        y: (Math.random() - 0.5) * window.innerHeight,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    return particles;
  }, []);

  const drawParticle = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: Particle,
    centerX: number,
    centerY: number
  ) => {
    const perspective = 800 / (800 + particle.z);
    const x = centerX + particle.x * perspective;
    const y = centerY + particle.y * perspective;
    const size = perspective * 2;

    ctx.globalAlpha = particle.opacity * perspective;
    ctx.fillStyle = particle.color;
    ctx.shadowColor = particle.color;
    ctx.shadowBlur = 25 * perspective;
    
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Mouse interaction effect
    const mouseInfluence = 0.0001;
    const scrollProgress = window.pageYOffset / Math.max(document.body.scrollHeight - window.innerHeight, 1);

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;

      // Mouse interaction
      const dx = mouseRef.current.x - centerX;
      const dy = mouseRef.current.y - centerY;
      particle.vx += dx * mouseInfluence;
      particle.vy += dy * mouseInfluence;

      // Boundary wrapping
      if (particle.x > window.innerWidth / 2) particle.x = -window.innerWidth / 2;
      if (particle.x < -window.innerWidth / 2) particle.x = window.innerWidth / 2;
      if (particle.y > window.innerHeight / 2) particle.y = -window.innerHeight / 2;
      if (particle.y < -window.innerHeight / 2) particle.y = window.innerHeight / 2;
      if (particle.z > 500) particle.z = -500;
      if (particle.z < -500) particle.z = 500;

      // Scroll-based scale effect
      const scale = 1 + scrollProgress * 0.3;
      particle.opacity = (0.8 + scrollProgress * 0.2) * (Math.random() * 0.3 + 0.7);

      drawParticle(ctx, particle, centerX, centerY);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticle]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  useEffect(() => {
    particlesRef.current = createParticles();
    handleResize();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, handleResize, handleMouseMove, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        background: 'transparent',
      }}
    />
  );
}