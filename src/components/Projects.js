import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaStethoscope, FaChartBar, FaShieldAlt, FaDatabase, FaCompress, FaShoppingCart, FaCloudSun, FaMapMarkedAlt, FaFilm, FaUtensils, FaCalendarAlt, FaGraduationCap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    title: "Virtual Assistant for Medicine",
    description: "An assistive system integrating medical images and clinical text to provide structured, reliable support for patients and clinicians to avoid missed insights.",
    tech: ["Machine Learning", "NLP", "Medical Imaging", "AI"],
    category: ["Machine Learning", "Computer Vision"],
    icon: FaStethoscope,
    link: "#",
    date: "01/10/2025 – Current"
  },
  {
    title: "Augmented Reality Based Navigator",
    description: "Enhancing real-world navigation using computer vision and AR technologies. Overlays directional cues onto the user's surroundings.",
    tech: ["AR Frameworks", "Computer Vision", "Object Detection"],
    category: ["Computer Vision"],
    icon: FaLaptopCode,
    link: "#",
    date: "14/09/2025 – Current"
  },
  {
    title: "DisasterGuard",
    description: "Real-time classification of crisis-related tweets to support emergency response leveraging advanced NLP and machine learning techniques.",
    tech: ["Python", "NLP", "Machine Learning"],
    category: ["Machine Learning"],
    icon: FaShieldAlt,
    link: "https://github.com/subhan-0786/DisasterGuard",
    date: "26/04/2025 – 10/05/2025"
  },
  {
    title: "Diabetes Prediction using ML",
    description: "Developed a machine learning model (Support Vector Classifier) to predict the onset of diabetes using patient health data, achieving strong predictive results.",
    tech: ["Python", "SVM", "Data Preprocessing"],
    category: ["Machine Learning"],
    icon: FaChartBar,
    link: "https://github.com/subhan-0786/Diabetes-Prediction-using-Support-Vector-Machine-SVM-",
    date: "25/01/2026 – 01/03/2026"
  },
  {
    title: "Rental Data Analysis",
    description: "Analyzed a rental property database using SQL and interactive data visualization (Power BI) to uncover insights about rental trends and property performance.",
    tech: ["SQL", "Power BI", "Data Modeling"],
    category: ["Data Science", "Backend"],
    icon: FaDatabase,
    link: "https://github.com/subhan-0786/Rental-Data-Analysis",
    date: "10/12/2024 – 21/12/2024"
  },
  {
    title: "Byte Saver",
    description: "Implemented Huffman Coding to optimize data storage and transmission, analyzing datasets to ensure maximum compression rates without data loss.",
    tech: ["C++", "Algorithms", "Huffman Coding"],
    category: ["C++"],
    icon: FaCompress,
    link: "https://github.com/subhan-0786/HuffmanCoding-ByteSaver",
    date: "08/12/2023 – 16/12/2023"
  },
  {
    title: "Stationery Store Management System",
    description: "An ASP.NET web application built with VB.NET for managing a stationery store. It provides role-based access for Admins, Managers, and Salespersons to handle users, products, orders, and reports.",
    tech: ["ASP.NET", "VB.NET", "SQL Server", "Bootstrap 5"],
    category: [".NET", "Backend"],
    icon: FaShoppingCart,
    link: "https://github.com/subhan-0786/StationeryStore-SSMS",
    date: "01/11/2024 – 15/05/2025"
  },
  {
    title: "Weather App",
    description: "A sleek and modern single-page application built with React to provide real-time weather information for cities worldwide. Powered by the Open-Meteo API.",
    tech: ["React", "Vite", "Open-Meteo API"],
    category: ["React"],
    icon: FaCloudSun,
    link: "https://github.com/subhan-0786/weatherApp",
    date: "18/08/2025 – 28/08/2025"
  },
  {
    title: "Travel Agency Dashboard",
    description: "A modern travel agency platform with an admin dashboard and public site. Generate AI-powered trip itineraries and book trips with ease.",
    tech: ["React", "Appwrite", "Tailwind CSS"],
    category: ["React"],
    icon: FaMapMarkedAlt,
    link: "https://github.com/subhan-0786/React-Travel-Agency-Dashboard",
    date: "05/06/2025 – 25/06/2025"
  },
  {
    title: "React Movies TMDB",
    description: "A Movie App that lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design.",
    tech: ["React.js", "Appwrite", "Tailwind CSS"],
    category: ["React"],
    icon: FaFilm,
    link: "https://github.com/subhan-0786/React-movies-TMDB",
    date: "01/05/2024 – 20/05/2024"
  },
  {
    title: "Food Detection & Calorie Estimation",
    description: "An interactive system that takes food images as input, recognizes the food using a fine-tuned Inception-v3 model, and provides nutritional facts.",
    tech: ["Python", "TensorFlow", "Keras"],
    category: ["Machine Learning", "Computer Vision"],
    icon: FaUtensils,
    link: "https://github.com/subhan-0786/FoodDetectionandCalorieEstimation-System",
    date: "18/11/2024 – 06/01/2025"
  },
  {
    title: "Time-Off Microservice",
    description: "A backend microservice built with NestJS and SQLite that manages the full lifecycle of employee time-off requests and keeps balance data in sync with an external HCM system.",
    tech: ["NestJS", "SQLite", "Node.js"],
    category: ["Backend"],
    icon: FaCalendarAlt,
    link: "https://github.com/subhan-0786/timeoff-microservice",
    date: "20/04/2026 – 25/04/2026"
  },
  {
    title: "EduCanvas LMS",
    description: "A command-line based management system written in C++ for student, faculty, and admin interactions within an educational institution.",
    tech: ["C++", "CLI"],
    category: ["C++"],
    icon: FaGraduationCap,
    link: "https://github.com/subhan-0786/LMS-EduCanvas",
    date: "14/11/2022 – 10/01/2023"
  }
];

// Dynamically sort projects by date (Newest first, 'Current' at the top)
const parseDate = (dateStr, isStart = false) => {
  const parts = dateStr.split(" – ");
  const targetStr = isStart ? parts[0].trim() : (parts[1] ? parts[1].trim() : parts[0].trim());
  if (targetStr.toLowerCase() === "current") return new Date(2099, 11, 31).getTime();
  const [day, month, year] = targetStr.split("/");
  return new Date(year, month - 1, day).getTime();
};

const sortedProjectsData = [...projectsData].sort((a, b) => {
  const endA = parseDate(a.date, false);
  const endB = parseDate(b.date, false);
  if (endA !== endB) return endB - endA;
  const startA = parseDate(a.date, true);
  const startB = parseDate(b.date, true);
  return startB - startA;
});

export default function Projects() {
  const filters = ["All", "React", "Machine Learning", "Computer Vision", ".NET", "Backend", "C++", "Data Science"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = activeFilter === "All"
    ? sortedProjectsData
    : sortedProjectsData.filter(project => project.category && project.category.includes(activeFilter));

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  const handleProjectClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

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

        <div className={styles.filterContainer}>
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => {
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

        {totalPages > 1 && (
          <div className={styles.paginationContainer}>
            <button className={styles.navBtn} onClick={handlePrevPage}>
              <FaChevronLeft />
            </button>
            <div className={styles.pageIndicator}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${idx === currentPage ? styles.activeDot : ''}`}
                  onClick={() => setCurrentPage(idx)}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={handleNextPage}>
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
