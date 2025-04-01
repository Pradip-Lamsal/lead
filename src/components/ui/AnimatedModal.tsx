import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  buttonSelector: string;
}

export function AnimatedModal({ children, isOpen, buttonSelector }: AnimatedModalProps) {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);

  // Find button on component mount
  useEffect(() => {
    setHasMounted(true);
    const button = document.querySelector(buttonSelector);
    if (button) {
      const rect = button.getBoundingClientRect();
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      // Fallback to center of screen
      setOrigin({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, [buttonSelector]);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 49,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 50,
              transformOrigin: `${origin.x}px ${origin.y}px`,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
              duration: 0.3
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 