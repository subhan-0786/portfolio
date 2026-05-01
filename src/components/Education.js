import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaCertificate, FaAward } from 'react-icons/fa';
import styles from '../styles/Education.module.css';

export default function Education() {
  const certifications = [
    { name: "Postman Student Expert", link: "https://drive.google.com/file/d/1tUhRArFmHA8dZwZ41p7s9pHdL_DKjvjd/view?usp=sharing" },
    { name: "DataCamp Associate Data Engineer", link: "https://www.datacamp.com/certificate/DEA0014992714823" },
    { name: "DataCamp Associate Data Analyst", link: "https://www.datacamp.com/certificate/DAA0011149682251" },
    { name: "DataCamp Associate Data Scientist", link: "https://www.datacamp.com/certificate/DSA0019974603214" }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Academic Background</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            The foundation of my technical knowledge, analytical skills, and professional growth.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Main University Card */}
          <motion.div
            className={`${styles.bentoCard} ${styles.bentoMain}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardIcon}>
              <FaUniversity />
            </div>
            <h3 className={styles.degree}>BS Computer & Information Sciences</h3>
            <div className={styles.institution}>Pakistan Institute of Engineering and Applied Sciences (PIEAS)</div>

            <div className={styles.details}>
              <span className={styles.detailBadge}>
                <FaCalendarAlt style={{ color: 'var(--accent-secondary)' }} /> Sep 2022 - June 2026
              </span>
              <span className={styles.detailBadge}>
                <FaMapMarkerAlt style={{ color: 'var(--accent-primary)' }} /> Islamabad, Pakistan
              </span>
              <span className={styles.detailBadge} style={{ borderColor: 'var(--accent-primary)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <FaAward style={{ color: '#FCD34D' }} /> Cyber Security & AI Society
              </span>
            </div>

            <p className={styles.description}>
              Currently pursuing a rigorous degree with a strong focus on software engineering, artificial intelligence, and advanced computer fundamentals. Building a solid foundation in scalable architecture while actively contributing to campus tech societies like the PIEAS Cyber Security Club and AI Society.
            </p>
          </motion.div>

          {/* High School Card */}
          <motion.div
            className={`${styles.bentoCard} ${styles.bentoSecondary}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`${styles.cardIcon} ${styles.cardIconSecondary}`}>
              <FaGraduationCap />
            </div>
            <h3 className={styles.degree} style={{ fontSize: '1.4rem' }}>FSc Pre-Engineering</h3>
            <div className={styles.institution}>Forman Christian College</div>

            <div className={styles.details} style={{ marginBottom: '16px' }}>
              <span className={styles.detailBadge} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                <FaCalendarAlt style={{ color: 'var(--accent-secondary)' }} /> 2020 - 2022
              </span>
              <span className={styles.detailBadge} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                <FaMapMarkerAlt style={{ color: 'var(--accent-primary)' }} /> Lahore
              </span>
            </div>

            <p className={styles.description} style={{ fontSize: '0.95rem' }}>
              Focused extensively on core sciences and advanced mathematics, establishing a rigorous academic background and strong analytical problem-solving skills that serve as the backbone of my engineering career.
            </p>
          </motion.div>

          {/* Certifications Wide Card */}
          <motion.div
            className={`${styles.bentoCard} ${styles.bentoCertifications}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.certHeader}>
              <h3 className={styles.certTitle}>Certifications</h3>
              <p className={styles.certSubtitle}>Continuous specialized learning</p>
            </div>

            <div className={styles.certGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certItem}>
                  <div className={styles.certName}>
                    <FaCertificate className={styles.certIcon} />
                    <span>{cert.name}</span>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                    Verify
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}