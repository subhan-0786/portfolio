import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Experience.module.css';

const experiences = [
    {
        company: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
        position: "Lab Engineer",
        location: "Islamabad, Pakistan",
        duration: "Sep 2025 – Jun 2026",
        achievements: [
            "Working with Dr. Nouman Shamim on CIS-121 (OOP course).",
            "Taught Computer Fundamentals and Programming Lab (Sep 2025 – Jan 2026).",
            "Teaching Object Oriented Programming Lab (Feb 2026 – Jun 2026)."
        ]
    },
    {
        company: "AI Naeco Blue GmbH",
        position: "Full-Stack Developer",
        location: "Remote, Germany",
        duration: "July 2025 – Sep 2025",
        achievements: [
            "Developed responsive and interactive web applications using JavaScript and React.",
            "Managed application state efficiently with Redux Toolkit.",
            "Integrated backend services and databases using Node.js and Appwrite."
        ]
    },
    {
        company: "ACM UET Lahore",
        position: "Flutter Developer Intern",
        location: "Remote, Pakistan",
        duration: "Jul. 2023 – Sep. 2023",
        achievements: [
            "Developed a cross-platform mobile app using Flutter.",
            "Integrated real-time COVID-19 data from multiple APIs.",
            "Implemented an intuitive and responsive UI design."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className="section-label">Career</div>
                    <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                    <p className="section-subtitle">
                        My professional journey and the impact I've made along the way.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.timelineDot} />

                            <div className={styles.timelineCard}>
                                <div className={styles.cardTop}>
                                    <div>
                                        <h3 className={styles.company}>{exp.company}</h3>
                                        <div className={styles.role}>{exp.position}</div>
                                    </div>
                                    <div className={styles.duration}>
                                        <FaCalendarAlt className={styles.durationIcon} />
                                        {exp.duration}
                                    </div>
                                </div>

                                <div className={styles.location}>
                                    <FaMapMarkerAlt className={styles.locationIcon} />
                                    {exp.location}
                                </div>

                                <div className={styles.achievements}>
                                    {exp.achievements.map((achievement, i) => (
                                        <div key={i} className={styles.achievement}>
                                            <div className={styles.achievementDot} />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
