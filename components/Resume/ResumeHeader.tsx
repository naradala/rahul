'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import type { ResumeData } from '@/data/resume';

interface ResumeHeaderProps {
  personal: ResumeData['personal'];
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ personal }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.section
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.13] blur-[150px]" />

      <div className="apple-container relative text-center">
        <motion.p
          className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-white/45 sm:text-sm"
          variants={itemVariants}
        >
          Full Stack Java Developer
        </motion.p>

        <motion.h1
          className="text-balance mx-auto max-w-6xl text-[clamp(4rem,12vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
          variants={itemVariants}
        >
          <span className="block text-white">
            {personal.name.split(' ')[0]}
          </span>

          <span className="block bg-gradient-to-b from-white via-white/85 to-white/30 bg-clip-text text-transparent">
            {personal.name.split(' ').slice(1).join(' ')}.
          </span>
        </motion.h1>

        <motion.p
          className="text-balance mx-auto mt-10 max-w-4xl text-[clamp(1.1rem,2.4vw,1.65rem)] leading-relaxed text-white/55"
          variants={itemVariants}
        >
          {personal.summary}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore my work
            <ArrowDown className="h-4 w-4" />
          </motion.a>

          <motion.a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-white/35 hover:bg-white/[0.09]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Email ${personal.name}`}
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-3 text-sm text-white/40 sm:flex-row sm:gap-8"
          variants={itemVariants}
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            <span>{personal.email}</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{personal.location}</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};