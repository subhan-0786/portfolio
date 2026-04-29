import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              Subhan<span className="gradient-text">.</span>
            </div>
            <p className={styles.tagline}>
              Building intelligent software and scalable solutions for the future.
            </p>
          </div>
          
          <div className={styles.actions}>
            <button className={styles.scrollTopBtn} onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Subhan Amjad. All rights reserved.
          </p>
          <div className={styles.links}>
            <a href="https://linkedin.com/in/subhanamjad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/subhan-0786" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:subhanamjad507@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
