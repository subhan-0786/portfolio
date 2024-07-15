import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaRunning, FaHandsHelping, FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/Volunteer.module.css';

const Volunteer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = [
    {
      shortName: "PAIS",
      organization: "PIEAS Artificial Intelligence Society",
      duration: "Jun. 2024 – Present",
      location: "PIEAS University Islamabad, Pakistan",
      role: "Vice President",
      description: "Enhancing organizational initiatives and member engagement. Leading AI workshops and organizing tech talks.",
      achievements: ["Increased member participation by 40%", "Organized 5 successful AI hackathons"],
      skills: ["Leadership", "AI/ML", "Event Management"],
      gradient: "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
      icon: FaGraduationCap
    },
    {
      shortName: "PSS",
      organization: "PIEAS Sportics Society",
      duration: "Aug. 2023 – Jun. 2024",
      location: "PIEAS University Islamabad, Pakistan",
      role: "Management Lead",
      description: "Led my team in managing events for the society. Coordinated inter-university sports competitions.",
      achievements: ["Successfully organized 10+ sports events", "Increased society membership by 25%"],
      skills: ["Team Management", "Event Planning", "Sports Administration"],
      gradient: "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
      icon: FaRunning
    },
    {
      shortName: "PVS",
      organization: "PIEAS Volunteer Society",
      duration: "Nov. 2023 – Feb. 2024",
      location: "PIEAS University Islamabad, Pakistan",
      role: "Senior Member",
      description: "Worked as a senior member under the supervision of LEAD. Participated in community outreach programs.",
      achievements: ["Contributed 100+ volunteer hours", "Led a team of 20 volunteers for a city-wide cleanup drive"],
      skills: ["Community Service", "Team Collaboration", "Project Coordination"],
      gradient: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
      icon: FaHandsHelping
    }
  ];

  const stats = [
    { label: "Total Volunteer Hours", value: "250+" },
    { label: "Events Organized", value: "20+" },
    { label: "Lives Impacted", value: "1000+" },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" }, },
          opacity: { value: 0.5, random: false, },
          size: { value: 3, random: true, },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, },
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
        },
        retina_detect: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section 
      className={styles.volunteerSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div id="particles-js" className={styles.particlesContainer}></div>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        VOLUNTEER EXPERIENCE
      </motion.h2>
      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <FaQuoteLeft className={styles.quoteIcon} />
        My journey in volunteering has been a transformative experience, allowing me to contribute to various causes while developing invaluable skills and connections.
      </motion.p>
      <div className={styles.experienceGrid}>
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={exp.shortName} 
            experience={exp} 
            index={index}
            isSelected={selectedCard === index}
            onClick={() => setSelectedCard(selectedCard === index ? null : index)}
          />
        ))}
      </div>
      <StatisticsSection stats={stats} />
      <AnimatePresence>
        {selectedCard !== null && (
          <ExpandedCard 
            experience={experiences[selectedCard]} 
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const ExperienceCard = ({ experience, index, isSelected, onClick }) => (
  <motion.div 
    className={`${styles.experienceCard} ${isSelected ? styles.selected : ''}`}
    style={{ background: experience.gradient }}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }}
    onClick={onClick}
    layout
  >
    <motion.div className={styles.cardContent} layout>
      <experience.icon className={styles.icon} />
      <motion.h3 layout>{experience.shortName}</motion.h3>
      <motion.h4 layout>{experience.organization}</motion.h4>
      <motion.div className={styles.divider} layout />
      <motion.p className={styles.role} layout>{experience.role}</motion.p>
      {!isSelected && (
        <motion.p className={styles.clickPrompt} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click to expand
        </motion.p>
      )}
    </motion.div>
  </motion.div>
);

const ExpandedCard = ({ experience, onClose }) => (
  <motion.div 
    className={styles.expandedCard}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
    <motion.button className={styles.closeButton} onClick={onClose}>×</motion.button>
    <h2>{experience.organization}</h2>
    <h3>{experience.role}</h3>
    <p>{experience.duration} | {experience.location}</p>
    <p>{experience.description}</p>
    <h4>Key Achievements:</h4>
    <ul>
      {experience.achievements.map((achievement, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {achievement}
        </motion.li>
      ))}
    </ul>
    <h4>Skills Developed:</h4>
    <div className={styles.skillTags}>
      {experience.skills.map((skill, index) => (
        <motion.span 
          key={index} 
          className={styles.skillTag}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const StatisticsSection = ({ stats }) => (
  <motion.div 
    className={styles.statisticsSection}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    {stats.map((stat, index) => (
      <div key={index} className={styles.statItem}>
        <h3>{stat.value}</h3>
        <p>{stat.label}</p>
      </div>
    ))}
  </motion.div>
);

export default Volunteer;