import { motion } from 'framer-motion';
import { FaLaptopCode, FaStethoscope, FaChartBar, FaShieldAlt, FaDatabase, FaCompress } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    title: "Virtual Assistant for Medicine",
    description: "An assistive system integrating medical images and clinical text to provide structured, reliable support for patients and clinicians to avoid missed insights.",
    tech: ["Machine Learning", "NLP", "Medical Imaging", "AI"],
    icon: FaStethoscope,
    link: "#",
    date: "01/10/2025 – Current"
  },
  {
    title: "Augmented Reality Based Navigator",
    description: "Enhancing real-world navigation using computer vision and AR technologies. Overlays directional cues onto the user's surroundings.",
    tech: ["AR Frameworks", "Computer Vision", "Object Detection"],
    icon: FaLaptopCode,
    link: "#",
    date: "14/09/2025 – Current"
  },
  {
    title: "DisasterGuard",
    description: "Real-time classification of crisis-related tweets to support emergency response leveraging advanced NLP and machine learning techniques.",
    tech: ["Python", "NLP", "Machine Learning"],
    icon: FaShieldAlt,
    link: "https://github.com/subhan-0786/DisasterGuard",
    date: "26/04/2025 – 10/05/2025"
  },
  {
    title: "Diabetes Prediction using ML",
    description: "Developed a machine learning model (Support Vector Classifier) to predict the onset of diabetes using patient health data, achieving strong predictive results.",
    tech: ["Python", "SVM", "Data Preprocessing"],
    icon: FaChartBar,
    link: "https://github.com/subhan-0786/Diabetes-Prediction-using-Support-Vector-Machine-SVM-",
    date: "25/01/2026 – 01/03/2026"
  },
  {
    title: "Rental Data Analysis",
    description: "Analyzed a rental property database using SQL and interactive data visualization (Power BI) to uncover insights about rental trends and property performance.",
    tech: ["SQL", "Power BI", "Data Modeling"],
    icon: FaDatabase,
    link: "https://github.com/subhan-0786/Rental-Data-Analysis",
    date: "10/12/2024 – 21/12/2024"
  },
  {
    title: "Byte Saver",
    description: "Implemented Huffman Coding to optimize data storage and transmission, analyzing datasets to ensure maximum compression rates without data loss.",
    tech: ["C++", "Algorithms", "Huffman Coding"],
    icon: FaCompress,
    link: "https://github.com/subhan-0786/HuffmanCoding-ByteSaver",
    date: "08/12/2023 – 16/12/2023"
  }
];

export default function Projects() {
  const handleProjectClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A showcase of my recent work in full-stack development, AI/ML, and emerging technologies.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project.link)}
              >
                <div className={styles.cardIcon}>
                  <Icon />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '8px' }}>{project.date}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <div className={styles.cardLink}>
                    View on GitHub <FaArrowRight className={styles.linkArrow} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
