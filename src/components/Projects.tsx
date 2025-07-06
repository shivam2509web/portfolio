import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Smartphone, Globe, Brain, Gamepad2, Sparkles } from 'lucide-react';
import langtonsAntImg from '../assets/LangtonsAntAnimated.gif';
import game2048Img from '../assets/2048.gif';
import chessImg from '../assets/chess.avif';
import musicImg from '../assets/music.avif';
import realestateImg from '../assets/realestate.jpg';
import portfolioImg from '../assets/portfolio.avif';
import budgetImg from '../assets/budget.avif';
import promoImg from '../assets/promo.avif';
import campusImg from '../assets/campus.png';
import workerImg from '../assets/worker.png';
import stocksImg from '../assets/stocks.png';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = [
    { id: 'all', name: 'All', icon: Sparkles },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'web', name: 'Web Dev', icon: Globe },
    { id: 'app', name: 'Apps', icon: Smartphone },
    { id: 'games', name: 'Games', icon: Gamepad2 },
    { id: 'fun', name: 'Fun', icon: Sparkles },
  ];

  const projects = [
    {
      id: 1,
      title: "Langton's Ant Simulation",
      description: "Simulated multi-agent emergent behavior using rule-based movement and stochastic pheromone logic.",
      category: ['ai', 'games'],
      tags: ['Python', 'Simulation', 'AI'],
      github: '',
      live: '',
      image: langtonsAntImg,
    },
    {
      id: 2,
      title: "AI-based 2048 Game Solver",
      description: "Created an AI agent using Monte Carlo Tree Search with custom GUI to solve 2048 efficiently.",
      category: ['ai', 'games'],
      tags: ['Python', 'AI', 'Game Theory'],
      github: '',
      live: '',
      image: game2048Img,
    },
    {
      id: 3,
      title: "AI Chess Game with Stockfish Engine",
      description: "Built a Pygame-based chess game with Stockfish AI integration and interactive gameplay.",
      category: ['ai', 'games'],
      tags: ['Python', 'Pygame', 'AI'],
      github: '',
      live: '',
      image: chessImg,
    },
    {
      id: 4,
      title: "Music Genre Clustering",
      description: "Used NLP techniques and K-Means clustering to group music genres by lyrical patterns.",
      category: ['ai'],
      tags: ['Python', 'NLP', 'Machine Learning'],
      github: '',
      live: '',
      image: musicImg,
    },
    {
      id: 5,
      title: "Real Estate Price Predictor",
      description: "Analyzed 21K+ listings to predict house prices using correlation analysis and visualization in Python.",
      category: ['ai', 'fun'],
      tags: ['Python', 'Data Analysis', 'ML'],
      github: '',
      live: '',
      image: realestateImg,
    },
    {
      id: 6,
      title: "Portfolio Optimization Tool",
      description: "Built a Python tool to analyze and optimize stock portfolios using volatility and rebalancing strategies.",
      category: ['ai'],
      tags: ['Python', 'Finance', 'Optimization'],
      github: '',
      live: '',
      image: portfolioImg,
    },
    {
      id: 7,
      title: "CTRL₹ – Budget Tracking App",
      description: "Offline-first budgeting app for Gen Z with daily/weekly/monthly tracking and persistent storage.",
      category: ['app'],
      tags: ['Flutter', 'Dart', 'Mobile'],
      github: '',
      live: '',
      image: budgetImg,
    },
    {
      id: 8,
      title: "CTRL₹ Promo Calculator",
      description: "Fun web tool that generates quirky money labels based on lifestyle and job input, with animated UI.",
      category: ['web', 'fun'],
      tags: ['React', 'JavaScript', 'Web'],
      github: '',
      live: '',
      image: promoImg,
    },
    {
      id: 9,
      title: "CTRL Campus – Campus SuperApp",
      description: "Modular college utility platform for societies, professors, events, leaderboards, and student tools.",
      category: ['web', 'fun'],
      tags: ['React', 'Node.js', 'Full Stack'],
      github: '',
      live: '',
      image: campusImg,
    },
    {
      id: 10,
      title: "Worker Booking Platform",
      description: "Web system with search, filtering, profile editing, and backend logic for client–worker booking.",
      category: ['web'],
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '',
      live: '',
      image: workerImg,
    },
    {
      id: 11,
      title: "CTRL Stocks",
      description: "A web-based platform to learn stock market concepts through simplified tools, visual aids, and Gen Z-friendly design.",
      category: ['ai', 'web'],
      tags: ['React', 'Python', 'Finance'],
      github: '',
      live: '',
      image: stocksImg,
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category.includes(activeFilter)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
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
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating innovative solutions 
            across different domains and technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <filter.icon size={20} />
              <span className="font-medium">{filter.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                layout
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Project Card */}
                <div className="glass rounded-2xl overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors group relative"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} className="text-white" />
                          <span className="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap bg-black text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 shadow-lg pointer-events-none">
                            Code not updated on GitHub right now
                          </span>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <motion.a
              href="https://github.com/shivam2509web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projects; 