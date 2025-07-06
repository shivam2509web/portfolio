import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImg from '../assets/Shivam kumar_24AR10034.jpg';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Create floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shivam2509web', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivamkumarkgpian', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shivamjha.iit25@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full opacity-40"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-80"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-green-500 rounded-full opacity-50"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            className="relative mx-auto w-48 h-48 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <img
                src={profileImg}
                alt="Shivam Kumar"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span aria-label="SHIVAM KUMAR" className="glitch-text">
              <span aria-hidden="true" className="gradient-text">SHIVAM KUMAR</span>
              <span className="gradient-text">SHIVAM KUMAR</span>
              <span aria-hidden="true" className="gradient-text">SHIVAM KUMAR</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            2nd Year Student @IIT KHARAGPUR
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-purple-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Founder of CTRL Community
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.a
              href={process.env.PUBLIC_URL + '/assets/shivam_resume.pdf'}
              download
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover-glow flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>

            <motion.button
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
              >
                <social.icon size={24} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 