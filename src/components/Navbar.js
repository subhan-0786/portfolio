import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollToSection('hero')}>
        Subhan<span className="gradient-text">.</span>
      </div>
      
      <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('experience')}>Experience</button>
        <button onClick={() => scrollToSection('education')}>Education</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('volunteer')}>Volunteer</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? styles.lineOpen1 : ''}></span>
        <span className={menuOpen ? styles.lineOpen2 : ''}></span>
        <span className={menuOpen ? styles.lineOpen3 : ''}></span>
      </button>
    </nav>
  );
};

export default Navbar;