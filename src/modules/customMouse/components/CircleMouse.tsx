import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouseVariant } from '../hooks/useMouseVariant';
import { MouseVariant } from '../types/mouse.type';
import styles from './CircleMouse.module.css';

const CircleMouse = () => {
  const { mouseVariant, text } = useMouseVariant();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {

      setMousePosition({ x: e.clientX, y: e.clientY });

    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants: Record<MouseVariant, {}> = {
    [MouseVariant.DEFAULT]: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    [MouseVariant.TEXT]: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75,

      mixBlendMode: 'difference',
    },
    [MouseVariant.TECHNOLOGY]: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 125,

      mixBlendMode: 'difference',
      backgroundImage:
        'linear-gradient(rgba(255,255,255, 1), rgba(255,255,255, 1))',
    },
  };
  

  return (
    <motion.div
    initial={{ x: -100, y: -100 }}
    variants={variants}
    className={`${styles.circleMouse} ${styles.primaryGradient} ${
      styles.pointerEventsNone
    } ${
      mouseVariant === MouseVariant.DEFAULT
        ? styles.defaultVariant
        : mouseVariant === MouseVariant.TEXT
        ? styles.textVariant
        : styles.technologyVariant
    }`}
    animate={{
      x: mousePosition.x,
      y: mousePosition.y,
    }}
    transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
  >
    {mouseVariant === MouseVariant.TECHNOLOGY && text}
  </motion.div>
  );
};

export default CircleMouse;
