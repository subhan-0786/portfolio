import { motion } from 'framer-motion';
import { 
  SiPython, SiCplusplus, SiJavascript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiTensorflow, SiPytorch, 
  SiOpencv, SiDart, SiGithub, SiHtml5, SiAppwrite, SiScikitlearn
} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { FaChartBar, FaCamera, FaDatabase, FaLaptopCode, FaBrain } from 'react-icons/fa';
import styles from '../styles/Skills.module.css';

const row1 = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "C++", icon: SiCplusplus },
  { name: "HTML / CSS", icon: SiHtml5 },
];

const row2 = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Feature Engineering", icon: FaBrain },
  { name: "AR / VR", icon: FaCamera },
  { name: "Data Modeling", icon: FaDatabase },
];

const row3 = [
  { name: "SQL", icon: DiSqllite },
  { name: "Power BI", icon: FaChartBar },
  { name: "Dart", icon: SiDart },
  { name: "Appwrite", icon: SiAppwrite },
  { name: "Git / GitHub", icon: SiGithub },
  { name: "Systems Design", icon: FaLaptopCode },
  { name: "Agile / Scrum", icon: FaLaptopCode },
];

export default function Skills() {
  // We duplicate the items in each row to create a seamless infinite scrolling effect
  const renderMarquee = (items, reverse = false, duration = "40s") => (
    <div className={styles.marqueeContainer}>
      <div 
        className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ''}`}
        style={{ '--duration': duration }}
      >
        {[...items, ...items].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={`${skill.name}-${index}`} className={styles.skillPill}>
              <Icon className={styles.pillIcon} />
              <span className={styles.pillName}>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">Technical <span className="gradient-text">Ecosystem</span></h2>
          <p className="section-subtitle">
            A diverse stack of technologies spanning web development, AI, and data science.
          </p>
        </div>

        <div className={styles.marqueeWrapper}>
          {renderMarquee(row1, false, "35s")}
          {renderMarquee(row2, true, "45s")}
          {renderMarquee(row3, false, "40s")}
        </div>
      </div>
    </section>
  );
}