import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import vectorifyLogo from '../assets/vectorify.jpeg';
import ktjLogo from '../assets/ktj.jpeg';
import sfLogo from '../assets/sf.jpeg';
import iwgLogo from '../assets/iwg.png';
import kikLogo from '../assets/kik.jpeg';
import ctrlLogo from '../assets/ctrl.png';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Founder & Coder",
      company: "CTRL Community",
      location: "IIT Kharagpur",
      period: "APR'2025 - Present",
      description: "I founded CTRL Community as a creative and technical initiative aimed at building tools that solve real problems faced by students — from tracking expenses to managing attendance and exploring campus life smarter. What started as an idea to merge utility with good design quickly became a self-driven mission. I've solely designed, coded, and deployed every project under CTRL, handling everything from UI/UX to logic and data flow. It's not just a brand — it's my sandbox to turn ideas into tangible, working products.",
      logo: ctrlLogo,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Senior Executive Member",
      company: "kodeinkgp",
      location: "IIT Kharagpur",
      period: "JUNE'2025 - Present",
      description: "At KodeinKGP, I'm an active contributor to the Blockchain Team, where I dive into decentralized technologies, assist with technical research, and participate in building real-world blockchain applications. From smart contract logic to exploring the future of Web3 ecosystems, I continuously engage with concepts that push the boundaries of how we trust, transact, and collaborate online. In the Design & Media Team, I focus on creating visually compelling content that communicates our initiatives effectively.",
      logo: kikLogo,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Associate Member",
      company: "Institute Wellness Group IIT Kharagpur",
      location: "IIT Kharagpur",
      period: "SEP'2024 - JUNE'2025",
      description: "As an Associate Member of the Institute Wellness Group (IWG), I contribute to initiatives that support student well-being and emotional resilience across campus. My role involves helping design campaigns, content, and communication strategies that promote mental health awareness, peer support, and holistic development. Through creative expression and active outreach, I work to ensure wellness remains a visible and inclusive part of campus life.",
      logo: iwgLogo,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Design and Media Team Associates",
      company: "Kshitij IIT Kharagpur",
      location: "IIT Kharagpur",
      period: "OCT'2024 - JAN'2025",
      description: "As a Design & Media Associate for Kshitij, Asia's largest techno-management fest, I help craft the visual identity of the fest through posters, digital assets, and promotional content. My work spans pre-fest publicity, event branding, and social media storytelling — executed using tools like Canva, Adobe Photoshop, Illustrator, and Premiere Pro. The goal: to communicate the scale and energy of Kshitij through design that's both cohesive and impactful.",
      logo: ktjLogo,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Design Team Members",
      company: "Spring Fest IIT Kharagpur",
      location: "IIT Kharagpur",
      period: "OCT'2024 - JAN'2025",
      description: "As part of the Design Team Member at Spring Fest, IIT Kharagpur, I contribute to creating the visual identity and promotional materials for one of the largest cultural festivals in India. My work involves designing posters, social media content, and digital assets that capture the spirit and energy of the festival.",
      logo: sfLogo,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 99,
      title: "Business Growth Associate",
      company: "Vectorify",
      location: "Remote",
      period: "OCT'2024 - NOV'2024",
      description: "At Vectorify, a student-led initiative from IIT Kharagpur that guides JEE and NEET aspirants through mentorship and strategic planning, I worked as a Business Growth Associate. My role focused on identifying expansion opportunities, improving outreach, and supporting campaign strategies to grow our user base. I collaborated closely on digital promotion, influencer partnerships, and student network activations — all aimed at scaling the impact of structured guidance for exam aspirants.",
      logo: vectorifyLogo,
      color: "from-gray-700 to-gray-400",
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various roles and organizations that have shaped my skills 
            and passion for technology and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-white rounded-full scale-75"></div>
              </div>

              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  className="glass rounded-2xl p-6 group relative"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logo */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {experience.logo ? (
                      <img src={experience.logo} alt={experience.company + ' logo'} className="w-12 h-12 object-contain rounded-xl bg-white/80 p-1" />
                    ) : (
                      <span className="text-3xl">🚀</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {experience.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              </div>
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
              Building the Future
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Each experience has been a stepping stone in my journey, teaching me valuable lessons about leadership, 
              collaboration, and innovation. From founding my own community to contributing to prestigious organizations, 
              I've learned that the best solutions come from understanding real problems and working with diverse teams 
              to create meaningful impact.
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

export default Experience; 