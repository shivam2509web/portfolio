import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, BarChart3, Eye, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      id: 'theThinker',
      icon: Brain,
      title: 'The Thinker',
      description: 'I see patterns — in numbers, in habits, in how people use technology. That curiosity drives everything I build.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      id: 'theBuilder',
      icon: Code,
      title: 'The Builder',
      description: 'From web dashboards to mobile apps, I love creating tools that look clean, feel smooth, and solve real problems',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.2,
    },
    {
      id: 'theAnalyst',
      icon: BarChart3,
      title: 'The Analyst',
      description: 'Data excites me. Whether it\'s behavior trends or performance metrics, I enjoy turning numbers into insights.',
      color: 'from-green-500 to-emerald-500',
      delay: 0.3,
    },
    {
      id: 'theVision',
      icon: Eye,
      title: 'The Vision',
      description: 'I believe tech isn\'t just about functionality — it\'s about connection. The things I create aim to feel human and helpful.',
      color: 'from-orange-500 to-red-500',
      delay: 0.4,
    },
    {
      id: 'theSpark',
      icon: Zap,
      title: 'The Spark',
      description: 'You\'ve read a bit about me here. But the real story is in my projects. Let\'s connect and explore how we can create something amazing together.',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate creator who believes in the power of technology to solve real-world problems. 
            My journey spans from architecture to coding, from design to data analysis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why I Do What I Do
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently pursuing a Bachelor of Architecture at IIT Kharagpur, but my learning extends far beyond the drafting table. 
              I actively explore how data, design, and technology intersect — from analyzing user behavior to building responsive websites and mobile apps. 
              My work often involves creating tools that are both visually engaging and functionally smart, driven by a passion to solve real-world problems through code, creativity, and critical thinking.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About; 