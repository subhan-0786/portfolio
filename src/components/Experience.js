import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "Mindstorm Studios",
      position: "Game Developer Intern",
      duration: "Jun. 2023 – Aug. 2023",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed a fully functional 2D game using Unity",
        "Led a team of 4 developers to complete the project",
        "Implemented complex game mechanics & optimized performance"
      ],
      testimonial: "An exceptional intern who quickly grasped game development concepts, mastered Unity tools showed great leadership potential in creating a 2D game project.",
      demoVideo: "/Mindstorm.mp4"
    },
    {
      company: "ACM UET Lahore",
      position: "Flutter Developer Intern",
      duration: "Jul. 2023 – Sep. 2023",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed a cross-platform mobile app using Flutter",
        "Integrated real-time COVID-19 data from multiple APIs",
        "Implemented an intuitive and responsive UI design"
      ],
      testimonial: "The cross-platform FLUTTER app to track worldwide COVID-19 patient data developed by this team member was instrumental in providing timely information to our community.",
      demoVideo: "/ACM.mp4"
    }
  ];

  return (
    <section className={styles.experience} id="experience">
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      
      <div className={styles.experienceContainer}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{exp.company}</h3>
            <p className={styles.position}><FaBriefcase /> {exp.position}</p>
            <p className={styles.duration}><FaCalendar /> {exp.duration}</p>
            <p className={styles.location}><FaMapMarkerAlt /> {exp.location}</p>
            
            <ul className={styles.achievements}>
              {exp.achievements.map((achievement, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FaCheckCircle className={styles.checkIcon} /> {achievement}
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className={styles.testimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>"{exp.testimonial}"</p>
            </motion.div>

            <motion.video 
              className={styles.demoVideo} 
              controls
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <source src={exp.demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;