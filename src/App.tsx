import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // Create floating particles effect
    const particles = document.createElement('div');
    particles.className = 'floating-particles';
    document.body.appendChild(particles);

    const particleElements: HTMLDivElement[] = [];
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particles.appendChild(particle);
      particleElements.push(particle);
    }

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      particleElements.forEach((particle, i) => {
        const strength = 10 + (i % 10) * 2; // different strength for each
        particle.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeChild(particles);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App" ref={containerRef}>
      {/* Animated Background */}
      <motion.div 
        className="animated-background"
        style={{ y: backgroundY }}
      >
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="mesh-gradient"></div>
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Floating Particles */}
      <div className="floating-particles"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
