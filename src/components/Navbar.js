//Navbar.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isHomePage, setIsHomePage] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setIsHomePage(router.pathname === '/');
        setIsMenuOpen(false);
    }, [router.pathname]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        
        // Set initial width
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Volunteer', href: '#volunteer' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`${styles.nav} ${isHomePage ? styles.homeNav : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <div className={styles.navContent}>
                <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <AnimatePresence>
                    {(isMenuOpen || windowWidth > 768) && (
                        <motion.ul
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}