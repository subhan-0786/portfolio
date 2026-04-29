import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedinIn, FaGithub, FaDownload, FaEnvelope, FaWhatsapp, FaLink } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    const socialIcons = [
        {
            icon: FaInstagram,
            href: "https://instagram.com/subhann.0",
            color: "from-pink-500 to-purple-500",
            ariaLabel: "Instagram"
        },
        {
            icon: SiLeetcode,
            href: "https://leetcode.com/u/subhannn/",
            color: "from-yellow-500 to-orange-500",
            ariaLabel: "LeetCode"
        },
        {
            icon: FaLinkedinIn,
            href: "https://linkedin.com/in/subhanamjad",
            color: "from-blue-500 to-blue-600",
            ariaLabel: "LinkedIn"
        },
        {
            icon: FaGithub,
            href: "https://github.com/subhan-0786",
            color: "from-gray-700 to-gray-800",
            ariaLabel: "GitHub"
        }
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/SubhanResume.pdf';
        link.download = 'SubhanResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.textSection}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className={styles.greetingBadge}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className={styles.greetingDot}></span>
                            Hello, I'm
                        </motion.div>

                        <motion.h1
                            className={styles.name}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Subhan Amjad
                        </motion.h1>

                        <motion.h2
                            className={styles.title}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className={styles.gradientText}>Software Engineer</span>
                        </motion.h2>

                        <motion.p
                            className={styles.description}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Versatile Computer Science student
                            with a strong passion for leveraging innovative technologies to build impactful solutions. Skilled at quickly learning new tools and delivering high-quality, efficient code.
                        </motion.p>

                        <motion.div
                            className={styles.contactBadges}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="mailto:subhanamjad507@gmail.com" className={styles.contactBadge}>
                                <FaEnvelope className={styles.badgeIcon} />
                                <span>subhanamjad507@gmail.com</span>
                            </a>
                            <a href="https://wa.me/923144306109" target="_blank" rel="noopener noreferrer" className={styles.contactBadge}>
                                <FaWhatsapp className={styles.badgeIcon} />
                                <span>+92 314 4306109</span>
                            </a>
                            <a href="https://linktr.ee/subhanamjad" target="_blank" rel="noopener noreferrer" className={styles.contactBadge}>
                                <FaLink className={styles.badgeIcon} />
                                <span>linktr.ee/subhanamjad</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className={styles.ctaSection}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <div className={styles.ctaButtons}>
                                <button className={styles.primaryBtn} onClick={handleDownload}>
                                    <FaDownload className={styles.buttonIcon} />
                                    Download Resume
                                </button>
                            </div>

                            <div className={styles.socialContainer}>
                                <div className={styles.socialIcons}>
                                    {socialIcons.map(({ icon: Icon, href, ariaLabel }, index) => (
                                        <a
                                            key={index}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={ariaLabel}
                                            className={styles.socialIcon}
                                        >
                                            <Icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.imageSection}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className={styles.imageContainer}>
                            <div className={styles.imageRing}></div>
                            <motion.div className={styles.imageFrame}>
                                <motion.img
                                    src="/SubhanCopy.png"
                                    alt="Subhan Amjad"
                                    className={styles.profileImage}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}