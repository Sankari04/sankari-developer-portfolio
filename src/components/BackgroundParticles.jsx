// src/components/BackgroundParticles.jsx
import React, { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate particles
    const particleCount = Math.min(Math.floor(width / 28), 50);
    const particles = [];
    const colors = [
      'rgba(168, 85, 247, 0.6)',
      'rgba(124, 58, 237, 0.5)',
      'rgba(192, 132, 252, 0.4)',
      'rgba(233, 213, 255, 0.3)',
      'rgba(255, 255, 255, 0.25)'
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.15, // float upwards
        alpha: Math.random() * 0.8 + 0.2,
        pulseSpeed: 0.015 + Math.random() * 0.02
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing background mesh
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.01;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 1.2;
          p.y -= (dy / dist) * 1.2;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.radius * 6;
        ctx.shadowColor = '#A855F7';
        ctx.fill();
        ctx.restore();
      });

      // Subtle constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {/* Ambient Radial Glowing Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(124, 58, 237, 0.04) 50%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-10%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.03) 55%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.09) 0%, transparent 65%)',
          filter: 'blur(75px)'
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          opacity: 0.85
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
