import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'top' | 'bottom' | 'none';
}

const getYOffset = (direction?: 'top' | 'bottom' | 'none') => {
  if (direction === 'top') return -50;
  if (direction === 'bottom') return 50;
  return 0;
};

const Fade = forwardRef<HTMLDivElement, MotionProps>(
  ({ direction = 'none', delay = 0, children, ...rest }, ref) => (
    <motion.div
      initial={{ opacity: 0, y: getYOffset(direction) }}
      whileInView={{ opacity: 1, y: 0 }}
      // className={rest.className} // to fix css issue due to motion.div wrapper
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      ref={ref}
      {...rest}
    >
      {children}
    </motion.div>
  ),
);

const Bounce = forwardRef<HTMLDivElement, MotionProps>(
  ({ direction = 'top', delay = 0, children, ...rest }, ref) => (
    <motion.div
      initial={{ y: getYOffset(direction), opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      // className={rest.className} // to fix css issue due to motion.div wrapper
      transition={{
        type: 'spring',
        bounce: 0.6,
        duration: 1,
        delay,
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </motion.div>
  ),
);

export default { Fade, Bounce };
