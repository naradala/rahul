'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Check, X } from 'lucide-react';
import type { ResumeData } from '@/data/resume';
import { Badge } from './Badge';

interface ExperienceSectionProps {
  experiences: ResumeData['experience'];
}

const accentStyles = {
  green: {
    line: 'bg-emerald-400',
    text: 'text-emerald-400',
    border:
      '[@media(hover:hover)]:group-hover:border-emerald-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(52,211,153,0.12)]',
    background:
      'from-emerald-500/[0.12] via-emerald-500/[0.03] to-transparent',
    mobileBorder: 'border-emerald-400/20',
    iconBackground: 'bg-emerald-400/10',
  },
  red: {
    line: 'bg-red-400',
    text: 'text-red-400',
    border:
      '[@media(hover:hover)]:group-hover:border-red-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(248,113,113,0.12)]',
    background:
      'from-red-500/[0.12] via-red-500/[0.03] to-transparent',
    mobileBorder: 'border-red-400/20',
    iconBackground: 'bg-red-400/10',
  },
  blue: {
    line: 'bg-blue-400',
    text: 'text-blue-400',
    border:
      '[@media(hover:hover)]:group-hover:border-blue-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(96,165,250,0.12)]',
    background:
      'from-blue-500/[0.12] via-blue-500/[0.03] to-transparent',
    mobileBorder: 'border-blue-400/20',
    iconBackground: 'bg-blue-400/10',
  },
  indigo: {
    line: 'bg-indigo-400',
    text: 'text-indigo-400',
    border:
      '[@media(hover:hover)]:group-hover:border-indigo-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(129,140,248,0.12)]',
    background:
      'from-indigo-500/[0.12] via-indigo-500/[0.03] to-transparent',
    mobileBorder: 'border-indigo-400/20',
    iconBackground: 'bg-indigo-400/10',
  },
  cyan: {
    line: 'bg-cyan-400',
    text: 'text-cyan-400',
    border:
      '[@media(hover:hover)]:group-hover:border-cyan-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(34,211,238,0.12)]',
    background:
      'from-cyan-500/[0.12] via-cyan-500/[0.03] to-transparent',
    mobileBorder: 'border-cyan-400/20',
    iconBackground: 'bg-cyan-400/10',
  },
  orange: {
    line: 'bg-orange-400',
    text: 'text-orange-400',
    border:
      '[@media(hover:hover)]:group-hover:border-orange-400/30',
    glow:
      '[@media(hover:hover)]:group-hover:shadow-[0_30px_100px_rgba(251,146,60,0.12)]',
    background:
      'from-orange-500/[0.12] via-orange-500/[0.03] to-transparent',
    mobileBorder: 'border-orange-400/20',
    iconBackground: 'bg-orange-400/10',
  },
} as const;

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const [openExperienceId, setOpenExperienceId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenExperienceId(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

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

  const toggleMobileDetails = (experienceId: string) => {
    setOpenExperienceId((currentId) =>
      currentId === experienceId ? null : experienceId,
    );
  };

  return (
    <motion.section
      id="experience"
      className="apple-section scroll-mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div className="mb-16" variants={itemVariants}>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
          Career
        </p>

        <h2 className="apple-heading">
          Experience across
          <span className="block text-white/30">
            leading organizations.
          </span>
        </h2>

        <p className="apple-description">
          Building scalable applications across financial services,
          healthcare, banking, payments, and enterprise technology.
        </p>
      </motion.div>

      <div className="group/experience-grid grid items-start gap-7 lg:grid-cols-2">
        {experiences.map((experience, index) => {
          const isOpen = openExperienceId === experience.id;
          const accent = accentStyles[experience.accent];

          return (
            <motion.article
              key={experience.id}
              variants={itemVariants}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`
                apple-card
                group
                relative
                self-start
                overflow-hidden
                outline-none
                transition-all
                duration-500

                [@media(hover:hover)]:group-hover/experience-grid:scale-[0.985]
                [@media(hover:hover)]:group-hover/experience-grid:opacity-45
                [@media(hover:hover)]:hover:!scale-100
                [@media(hover:hover)]:hover:!opacity-100

                ${accent.border}
                ${accent.glow}

                ${
                  index === 0
                    ? 'p-7 sm:p-10 lg:col-span-2 lg:min-h-[430px] lg:p-14'
                    : 'p-7 sm:p-10 lg:min-h-[370px]'
                }
              `}
            >
              {/* Background accent */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${accent.background}
                  opacity-0
                  transition-opacity
                  duration-500

                  [@media(hover:hover)]:group-hover:opacity-100

                  ${isOpen ? '[@media(hover:none)]:opacity-100' : ''}
                `}
              />

              {/* Animated top line */}
              <div
                className={`
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  ${accent.line}
                  transition-all
                  duration-500

                  [@media(hover:hover)]:group-hover:w-full

                  ${isOpen ? '[@media(hover:none)]:w-full' : ''}
                `}
              />

              {/* Main card content */}
              <div className="relative z-10 flex h-full min-h-[300px] flex-col">
                <div>
                  <h3
                    className={`
                      font-semibold
                      tracking-[-0.045em]
                      text-white

                      ${
                        index === 0
                          ? 'text-4xl sm:text-5xl lg:text-6xl'
                          : 'text-3xl sm:text-4xl'
                      }
                    `}
                  >
                    {experience.company}
                  </h3>

                  <p
                    className={`
                      mt-3
                      text-base
                      font-medium
                      sm:text-lg
                      ${accent.text}
                    `}
                  >
                    {experience.position}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
                  <Calendar className={`h-4 w-4 ${accent.text}`} />
                  <span>{experience.duration}</span>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    Project focus
                  </p>

                  <p
                    className={`
                      leading-7
                      text-white/60
                      ${index === 0 ? 'max-w-4xl text-lg' : ''}
                    `}
                  >
                    {experience.overview}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-9">
                  {experience.technologies.map((technology) => (
                    <Badge
                      key={`${experience.id}-${technology}`}
                      text={technology}
                    />
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <p className="hidden text-xs text-white/25 [@media(hover:hover)]:block">
                    Hover to view key contributions
                  </p>

                  <p className="text-xs text-white/25 [@media(hover:hover)]:hidden">
                    Tap ••• to explore
                  </p>

                  {/* Mobile/touch details button */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleMobileDetails(experience.id);
                    }}
                    aria-label={
                      isOpen
                        ? `Close ${experience.company} project details`
                        : `View ${experience.company} project details`
                    }
                    aria-expanded={isOpen}
                    aria-controls={`${experience.id}-mobile-details`}
                    className="
                      relative
                      z-30
                      ml-auto
                      flex
                      h-10
                      min-w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.055]
                      px-4
                      text-sm
                      font-semibold
                      tracking-[0.14em]
                      text-white/55
                      backdrop-blur-xl
                      transition-all
                      duration-300

                      [@media(hover:hover)]:opacity-40

                      hover:scale-[1.04]
                      hover:border-white/20
                      hover:bg-white/[0.1]
                      hover:text-white
                      hover:opacity-100

                      active:scale-95

                      focus-visible:opacity-100
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white/40
                    "
                  >
                    {isOpen ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="-translate-y-[2px]"
                      >
                        •••
                      </span>
                    )}
                  </button>
                </div>

                {/* Mobile/touch expanded details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${experience.id}-mobile-details`}
                      initial={{
                        height: 0,
                        opacity: 0,
                        y: 16,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        y: 16,
                      }}
                      transition={{
                        height: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.3,
                        },
                        y: {
                          duration: 0.35,
                        },
                      }}
                      className="
                        overflow-hidden
                        [@media(hover:hover)]:hidden
                      "
                    >
                      <div
                        className={`
                          mt-8
                          border-t
                          pt-8
                          ${accent.mobileBorder}
                        `}
                      >
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                          Key contributions
                        </p>

                        <ul className="mt-5 space-y-4">
                          {experience.description.map(
                            (description, descriptionIndex) => (
                              <motion.li
                                key={`${experience.id}-mobile-${descriptionIndex}`}
                                initial={{
                                  opacity: 0,
                                  x: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  duration: 0.35,
                                  delay: descriptionIndex * 0.045,
                                }}
                                className="flex gap-4 text-sm leading-7 text-white/70 sm:text-base"
                              >
                                <span
                                  className={`
                                    mt-1
                                    flex
                                    h-6
                                    w-6
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    ${accent.iconBackground}
                                  `}
                                >
                                  <Check
                                    className={`h-3.5 w-3.5 ${accent.text}`}
                                  />
                                </span>

                                <span>{description}</span>
                              </motion.li>
                            ),
                          )}
                        </ul>

                        <button
                          type="button"
                          onClick={() => setOpenExperienceId(null)}
                          className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.05]
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-white/55
                            transition-all
                            duration-300

                            hover:border-white/20
                            hover:bg-white/[0.1]
                            hover:text-white

                            active:scale-95
                          "
                        >
                          <X className="h-4 w-4" />
                          Close details
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop hover overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-40
                  hidden
                  translate-y-6
                  flex-col
                  rounded-[inherit]
                  bg-black/85
                  p-7
                  opacity-0
                  backdrop-blur-2xl
                  transition-all
                  duration-500

                  [@media(hover:hover)]:flex
                  [@media(hover:hover)]:group-hover:translate-y-0
                  [@media(hover:hover)]:group-hover:opacity-100

                  sm:p-10
                "
              >
                <div>
                  <p className={`text-sm font-medium ${accent.text}`}>
                    {experience.position}
                  </p>

                  <h4
                    className={`
                      mt-2
                      font-semibold
                      tracking-[-0.04em]
                      text-white

                      ${
                        index === 0
                          ? 'text-4xl sm:text-5xl'
                          : 'text-3xl'
                      }
                    `}
                  >
                    {experience.company}
                  </h4>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/45">
                  <Calendar className={`h-4 w-4 ${accent.text}`} />
                  <span>{experience.duration}</span>
                </div>

                <div className="mt-8">
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    Key contributions
                  </p>

                  <ul className="space-y-3 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                    {experience.description
                      .slice(0, index === 0 ? 5 : 4)
                      .map((description, descriptionIndex) => (
                        <li
                          key={`${experience.id}-desktop-${descriptionIndex}`}
                          className="flex gap-3"
                        >
                          <span
                            className={`
                              mt-[9px]
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              ${accent.line}
                            `}
                          />

                          <span>{description}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {experience.description.length >
                  (index === 0 ? 5 : 4) && (
                  <p className="mt-auto pt-6 text-xs text-white/30">
                    See the full resume for additional details.
                  </p>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};