import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedDivProps = {
  children: ReactNode;
  staggerChildren?: boolean;
  className?: string;
};

const AnimatedDiv = ({
  children,
  staggerChildren = true,
  className = "",
}: AnimatedDivProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${className}`}
    >
      {staggerChildren
        ? childArray.map((child, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default AnimatedDiv;
