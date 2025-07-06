import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      id: 1,
      institution: "Indian Institute of Technology, Kharagpur",
      degree: "B.Arch in Architecture and Regional Planning",
      period: "2024-Present",
      grade: "CGPA: 8.0",
      description: "I'm currently pursuing a Bachelor of Architecture at IIT Kharagpur, but my learning extends far beyond the drafting table. I actively explore how data, design, and technology intersect — from analyzing user behavior to building responsive websites and mobile apps. My work often involves creating tools that are both visually engaging and functionally smart, driven by a passion to solve real-world problems through code, creativity, and critical thinking.",
      logo: "🏛️",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Finalist, Prajatantra 2024 National Op-Ed Competition (IIT Kharagpur Rep)"
      ],
    },
    {
      id: 2,
      institution: "MKD Public School, Motihari",
      degree: "XIIth - CBSE",
      period: "2021-2023",
      grade: "Grade: 83.4%",
      description: "I completed my 11th and 12th at MKD Public School, where my fascination with mathematics, science, and technology truly came alive. Whether it was solving complex equations or tinkering with logical puzzles, I found joy in understanding how things work beneath the surface. Those years didn't just shape my academic direction — they sparked the curiosity that still fuels every project I build today.",
      logo: "\ud83d\udcda",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "JEE Advanced Qualified",
        "Top 2% in JEE Mains"
      ],
    },
    {
      id: 3,
      institution: "MKD Public School, Motihari",
      degree: "Xth - CBSE",
      period: "2020-2021",
      grade: "Grade: 90%",
      description: "My journey at MKD Public School began long before senior secondary — I completed my 10th here as well. It was during these foundational years that I developed a genuine love for problem-solving, science experiments, and anything that involved a spark of logic or creativity. That early environment nurtured both my curiosity and confidence, setting the stage for everything I've explored since.",
      logo: "\ud83c\udf93",
      color: "from-green-500 to-emerald-500",
      achievements: [
        "NTSE Qualified",
        "State & National Level Scholar",
        "Academic Excellence Award"
      ],
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
    <section id="education" className="py-20 relative">
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
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey that has shaped my foundation in technology, 
            design, and problem-solving.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full">
                {/* Logo */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.logo}
                </motion.div>

                {/* Institution */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {edu.institution}
                </h3>

                {/* Degree */}
                <p className="text-lg text-purple-400 mb-2 font-semibold">
                  {edu.degree}
                </p>

                {/* Period and Grade */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <span className="font-semibold text-green-400">{edu.grade}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <Award size={14} className="text-yellow-400" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Lifelong Learning
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My educational journey has been more than just acquiring knowledge — it's been about developing 
              a mindset of continuous learning and innovation. From my early years at MKD Public School to my 
              current studies at IIT Kharagpur, each phase has contributed to my growth as a problem-solver, 
              creator, and technology enthusiast. The combination of formal education and self-driven exploration 
              has equipped me with the skills and mindset to tackle complex challenges and create meaningful solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Education; 