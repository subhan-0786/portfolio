import { motion } from 'framer-motion';
import styles from '../styles/HeroSection.module.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function HeroSection() {
    const handleDownload = () => {
        // ... (download logic remains the same)
    };

    return (
        <section className={styles.hero}>
            <motion.div 
                className={styles.circle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <motion.h2
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        I'm Subhan
                    </motion.h2>
                    <motion.h3
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A Developer
                    </motion.h3>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I'm also a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life.
                    </motion.p>
                    <motion.div
                        className={styles.ctaSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className={styles.downloadButton} onClick={handleDownload}>
                            Download Resume
                        </button>
                        <div className={styles.socialIcons}>
                            <a href="https://instagram.com/subhan._0786" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://facebook.com/samjad.786" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://linkedin.com/in/subhan-amjad-758927272" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://github.com/subhan-0786" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </motion.div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.imageBackground}></div>
                    <motion.img
                        src="/SubhanCopy.png"
                        alt="Profile"
                        className={styles.profileImage}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </div>
            </div>
        </section>
    );
}