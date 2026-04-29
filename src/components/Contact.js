import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const message = e.target.message.value.trim();
    const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;

    if (wordCount < 10) {
      alert("Please provide more details! Your message must be at least 10 words.");
      setStatus('');
      return;
    }

    // Web3Forms API Key
    const accessKey = "db7078fc-7049-47c0-becf-be25f6e34a9d";

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      alert("Almost there! Please follow my instructions in the chat to get your free Access Key.");
      setStatus('');
      return;
    }

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! ✓');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send. Try again.');
      }
    } catch (error) {
      setStatus('Network error occurred.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Contact <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoCardTitle}>Contact Information</h3>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><FaEnvelope /></div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <a href="mailto:subhanamjad507@gmail.com">subhanamjad507@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}><FaPhoneAlt /></div>
                <div className={styles.infoContent}>
                  <h4>Phone</h4>
                  <a href="https://wa.me/923144306109" target="_blank" rel="noopener noreferrer">+92 314 4306109</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}><FaMapMarkerAlt /></div>
                <div className={styles.infoContent}>
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <h3 className={styles.infoCardTitle} style={{ marginTop: '40px' }}>Digital Profiles</h3>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><FaLinkedinIn /></div>
                <div className={styles.infoContent}>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/subhanamjad" target="_blank" rel="noopener noreferrer">linkedin.com/in/subhanamjad</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}><SiLeetcode /></div>
                <div className={styles.infoContent}>
                  <h4>LeetCode</h4>
                  <a href="https://leetcode.com/u/subhannn/" target="_blank" rel="noopener noreferrer">leetcode.com/u/subhannn</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.inputGroup}>
              <label className={styles.label}>Your Name</label>
              <input type="text" name="name" className={styles.input} required placeholder="John Doe" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Your Email</label>
              <input type="email" name="email" className={styles.input} required placeholder="john@example.com" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea name="message" className={styles.textarea} required placeholder="How can I help you?"></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'Sending...'}>
              {status || 'Send Message'} <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}