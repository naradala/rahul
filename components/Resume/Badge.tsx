'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-xl transition-colors duration-300 ${
        isPrimary
          ? 'border-blue-400/25 bg-blue-400/10 text-blue-100 hover:border-blue-400/45 hover:bg-blue-400/15'
          : 'border-white/10 bg-white/[0.05] text-white/60 hover:border-white/20 hover:bg-white/[0.09]'
      }`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.span>
  );
};