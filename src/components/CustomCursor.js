import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/CustomCursor.module.css';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with a mouse
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button');
      
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={styles.cursor}
      animate={{ 
        x: mousePosition.x - (isHovering ? 40 : 10), 
        y: mousePosition.y - (isHovering ? 40 : 10),
        width: isHovering ? 80 : 20,
        height: isHovering ? 80 : 20
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
    />
  );
}
