import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';
import styles from '../styles/Education.module.css';

export default function Education() {
  const educationData = [
    {
      degree: "BS Computer & Information Sciences",
      institution: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
      location: "Islamabad, Pakistan",
      duration: "Sep 2022 - June 2026",
      description: "Currently pursuing a degree with a strong focus on software engineering, AI, and computer fundamentals. Actively involved in campus tech societies like PIEAS Cyber Security Club and PIEAS AI Society.",
      icon: FaUniversity
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "Forman Christian College",
      location: "Lahore, Pakistan",
      duration: "Oct 2020 - Aug 2022",
      description: "Focused on core sciences and mathematics, establishing a rigorous academic background and strong problem-solving skills.",
      icon: FaGraduationCap
    }
  ];

  const certifications = [
    "DataCamp Associate Data Engineer",
    "DataCamp Associate Data Scientist",
    "DataCamp Associate Data Analyst"
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label">Academic Background</div>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">
            The foundation of my technical knowledge, analytical skills, and professional certifications.
          </p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((edu, index) => {
            return (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.timelineDot} />

                <div className={styles.eduCard}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.institution}>{edu.institution}</div>

                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <FaCalendarAlt style={{ color: 'var(--accent-secondary)' }} />
                      {edu.duration}
                    </div>
                    <div className={styles.detailItem}>
                      <FaMapMarkerAlt style={{ color: 'var(--accent-primary)' }} />
                      {edu.location}
                    </div>
                  </div>

                  <p className={styles.description}>{edu.description}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.timelineDot} />

            <div className={styles.eduCard} style={{ background: 'transparent', borderColor: 'transparent', padding: '0 0 20px 0' }}>
              <h3 className={styles.degree} style={{ fontSize: '1.2rem' }}>Professional Certifications</h3>
              <p className={styles.description}>
                Continuous learning through specialized industry certifications.
              </p>

              <div className={styles.certGrid}>
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.certCard}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaCertificate className={styles.certIcon} />
                    <span className={styles.certText}>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}