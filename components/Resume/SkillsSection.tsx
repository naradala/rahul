'use client';

import { motion } from 'framer-motion';
import type { ResumeData } from '@/data/resume';
import { Badge } from './Badge';

interface SkillsSectionProps {
  skills: ResumeData['skills'];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="apple-section scroll-mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div className="mb-16" variants={itemVariants}>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
          Capabilities
        </p>

        <h2 className="apple-heading">
          Technology built
          <span className="block text-white/30">for scale.</span>
        </h2>

        <p className="apple-description">
          A modern full-stack toolkit for building enterprise applications,
          distributed systems, APIs, cloud solutions, and responsive user
          experiences.
        </p>
      </motion.div>

      <div className="grid gap-7 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            className={`apple-card p-7 sm:p-10 ${
              index === 0 ? 'md:col-span-2' : ''
            }`}
            variants={itemVariants}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <div className="relative z-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3
                className={`font-semibold tracking-[-0.035em] text-white ${
                  index === 0
                    ? 'text-3xl sm:text-4xl'
                    : 'text-2xl sm:text-3xl'
                }`}
              >
                {group.category}
              </h3>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={`${group.category}-${skill}`}
                    text={skill}
                    variant={index === 0 ? 'primary' : 'secondary'}
                  />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};