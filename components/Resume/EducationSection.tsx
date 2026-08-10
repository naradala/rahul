'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { ResumeData } from '@/data/resume';

interface EducationSectionProps {
  education: ResumeData['education'];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
}) => {
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id="education"
      className="apple-section scroll-mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div className="mb-16" variants={itemVariants}>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
          Foundation
        </p>

        <h2 className="apple-heading">
          Education that
          <span className="block text-white/30">shaped the journey.</span>
        </h2>

        <p className="apple-description">
          Academic experience that established a strong foundation in
          information technology, software development, and enterprise
          systems.
        </p>
      </motion.div>

      <div className="grid gap-7 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.id}
            className={`apple-card p-7 sm:p-10 ${
              education.length === 1 ? 'md:col-span-2' : ''
            }`}
            variants={itemVariants}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-10 flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>

                <span className="text-sm text-white/35">
                  {item.graduationYear}
                </span>
              </div>

              <p className="mb-3 text-sm font-medium text-blue-400">
                {item.institution}
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                {item.degree}
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-white/50">
                {item.field}
              </p>

              {item.gpa && (
                <div className="mt-auto pt-10">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/55">
                    GPA&nbsp;
                    <span className="font-medium text-white">{item.gpa}</span>
                  </div>
                </div>
              )}

              {!item.gpa && (
                <div className="mt-auto pt-10">
                  <p className="text-sm text-white/35">
                    Graduated {item.graduationYear}
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute -bottom-10 -right-10 text-[9rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};