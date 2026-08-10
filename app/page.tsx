'use client';

import { motion } from 'framer-motion';
import {
  ResumeHeader,
  ExperienceSection,
  SkillsSection,
  EducationSection,
} from '@/components/Resume';
import { resumeData } from '@/data/resume';

export default function HomePage() {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <motion.main
      id="top"
      className="relative min-h-screen overflow-hidden bg-black text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Subtle fixed background lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.12] blur-[160px]" />

        <div className="absolute bottom-[-350px] right-[-250px] h-[650px] w-[650px] rounded-full bg-purple-500/[0.07] blur-[170px]" />
      </div>

      <div className="relative z-10">
        <ResumeHeader personal={resumeData.personal} />

        <div className="apple-container">
          <ExperienceSection experiences={resumeData.experience} />

          <SkillsSection skills={resumeData.skills} />

          <EducationSection education={resumeData.education} />
        </div>

        <motion.footer
          className="mt-12 border-t border-white/10 py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="apple-container flex flex-col justify-between gap-3 text-sm text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {resumeData.personal.name}
            </p>

            <p>Designed and developed with Next.js</p>
          </div>
        </motion.footer>
      </div>
    </motion.main>
  );
}