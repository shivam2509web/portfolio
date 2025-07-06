import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/shivam2509web', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shivamkumarkgpian', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shivamjha.iit25@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer-glass-gradient py-10 px-4 mt-24 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold gradient-text mb-1">Shivam Kumar</h2>
          <p className="text-gray-300 text-sm">&copy; {year} Shivam Kumar. All rights reserved.</p>
        </div>
        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Right: Socials & Back to Top */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-4">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={22} className="text-white" />
              </a>
            ))}
          </div>
          <button
            onClick={handleBackToTop}
            className="mt-2 flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 