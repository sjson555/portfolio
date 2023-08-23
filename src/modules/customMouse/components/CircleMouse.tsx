import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouseVariant } from '../hooks/useMouseVariant';
import { MouseVariant } from '../types/mouse.type';
import './CircleMouse.css'; 

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

  const circleClasses = `circle-mouse ${mouseVariant === MouseVariant.TECHNOLOGY ? 'technology' : ''}`;

  return (
    <motion.div
      initial={{ x: -100, y: -100 }}
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      className={circleClasses}
      transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
    >
      {mouseVariant === MouseVariant.TECHNOLOGY && <div className="circle-text">{text}</div>}
    </motion.div>
  );
};

export default CircleMouse;
