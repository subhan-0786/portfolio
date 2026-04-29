import { motion } from 'framer-motion';
import { FaShieldAlt, FaRobot, FaMicrosoft } from 'react-icons/fa';
import styles from '../styles/Volunteer.module.css';

export default function Volunteer() {
  const volunteerData = [
    {
      role: "President",
      org: "PIEAS Cyber Security Club (PCSC)",
      duration: "Sep 2025 - March 2026",
      desc: "Leading the cyber security club initiatives, organizing workshops, and managing a community of tech enthusiasts passionate about information security.",
      icon: FaShieldAlt
    },
    {
      role: "Vice President",
      org: "PIEAS AI Society (PAIS)",
      duration: "Sep 2024 - June 2025",
      desc: "Helped steer the AI society, organizing seminars on machine learning and artificial intelligence, and fostering a culture of innovation on campus.",
      icon: FaRobot
    },
    {
      role: "Learn Student Ambassador",
      org: "Microsoft",
      duration: "Jan 2025 - May 2025",
      desc: "Acted as a liaison between Microsoft and the student community, sharing knowledge about Microsoft technologies and hosting training sessions.",
      icon: FaMicrosoft
    }
  ];

  return (
    <section id="volunteer" className={styles.volunteer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Community</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Leadership & <span className="gradient-text">Volunteer Work</span></h2>
        </div>

        <div className={styles.grid}>
          {volunteerData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3 className={styles.role}>{item.role}</h3>
                <div className={styles.org}>{item.org}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '12px', fontWeight: '600' }}>{item.duration}</div>
                <p className={styles.desc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}