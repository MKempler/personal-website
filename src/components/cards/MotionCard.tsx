import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface MotionCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionCard: React.FC<MotionCardProps> = ({ children, className, ...rest }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }} // amount:0.2 ensures animation triggers a bit earlier
      className={className} // Pass className to the motion.div
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard; 