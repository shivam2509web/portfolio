import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Globe,
  GitBranch,
  Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [ref, inView] = useInViewObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'C/C++', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'SQL', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'Java', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90, color: 'from-cyan-500 to-blue-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-purple-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-cyan-500' },
        { name: 'Next.js', level: 75, color: 'from-gray-500 to-black' },
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'React Native', level: 70, color: 'from-purple-500 to-pink-500' },
        { name: 'Dart', level: 80, color: 'from-blue-600 to-blue-800' },
      ]
    },
    {
      id: 'design',
      name: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'AutoCAD', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Adobe Creative Suite', level: 80, color: 'from-orange-500 to-red-500' },
        { name: 'Canva', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'PowerPoint', level: 90, color: 'from-orange-600 to-red-600' },
      ]
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      skills: [
        { name: 'PowerBI', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Tableau', level: 80, color: 'from-blue-500 to-purple-500' },
        { name: 'Data Analysis', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Machine Learning', level: 75, color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: GitBranch,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-black' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Docker', level: 70, color: 'from-blue-600 to-blue-800' },
        { name: 'Postman', level: 85, color: 'from-orange-500 to-red-500' },
      ]
    }
  ];

  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse toolkit that spans from programming languages to design tools, 
            enabling me to bring ideas to life across multiple platforms.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <category.icon size={20} />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {activeCategoryData?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Skill Card */}
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in staying current with the latest technologies and methodologies. 
              My skill set is constantly evolving as I explore new tools, frameworks, and approaches. 
              Whether it's mastering a new programming language or diving into emerging technologies like AI/ML, 
              I'm always excited to expand my capabilities and push the boundaries of what I can create.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-5 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-5 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills; 