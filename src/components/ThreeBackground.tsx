import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Environment } from '@react-three/drei';
import { Mesh } from 'three';

interface FloatingOrbProps {
  color: string;
  position: [number, number, number];
  speed?: number;
  mouse: { x: number; y: number };
}

function FloatingOrb({ color, position, speed = 1, mouse }: FloatingOrbProps) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      // Parallax effect: mouse.x/y in [-1, 1]
      const parallaxX = mouse.x * 1.2;
      const parallaxY = mouse.y * 1.2;
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.5 + parallaxY;
      ref.current.position.x = position[0] + Math.cos(clock.getElapsedTime() * speed) * 0.5 + parallaxX;
    }
  });
  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={position}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </Sphere>
  );
}

const ThreeBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <FloatingOrb color="#ff00c8" position={[-3, 0, 0]} speed={1.2} mouse={mouse} />
          <FloatingOrb color="#06ffa5" position={[3, 1, 0]} speed={1.5} mouse={mouse} />
          <FloatingOrb color="#3a86ff" position={[0, -2, 0]} speed={1.1} mouse={mouse} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground; 