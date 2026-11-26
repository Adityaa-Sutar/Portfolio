import React from 'react'
import { motion as Motion } from 'framer-motion'
import { GraduationCap, Award, MapPin } from 'lucide-react'
import codeclogo from '../assets/codec.png'
import aerozonelogo from '../assets/aerozone.png'

const EASE = [0.22, 1, 0.36, 1]

const EXPERIENCES = [
  {
    id: 1,
    role: 'Cloud Computing Intern',
    company: 'Codec Technologies India',
    type: 'Internship',
    duration: 'Apr 2026 — Jun 2026',
    durationDetail: '3 mos',
    location: 'India · Hybrid',
    logo: codeclogo,
    highlights: [
      'Deployed, managed, and optimized cloud-based web applications across virtualized infrastructure.',
      'Improved system performance, uptime reliability, and cloud cost efficiency through resource tuning.',
    ],
    tags: ['AWS', 'Cloud Infrastructure', 'Virtualization', 'Optimization'],
  },
  {
    id: 2,
    role: 'Full Stack Engineer',
    company: 'AEROZONE',
    type: 'Internship',
    duration: 'Aug 2025 — Mar 2026',
    durationDetail: '8 mos',
    location: 'Mumbai, Maharashtra · Hybrid',
    logo: aerozonelogo,
    highlights: [
      'Engineered a responsive full-stack web application using React.js, Node.js, and Firestore to streamline client onboarding.',
      'Conducted peer code reviews and enforced modular best practices, improving overall codebase maintainability.',
    ],
    tags: ['React.js', 'Node.js', 'Firestore', 'Code Review'],
  },
]

const CREDENTIALS = [
  {
    icon: GraduationCap,
    eyebrow: 'Education · Mar 2025',
    title: 'B.Sc. in Computer Science',
    subtitle: 'K. V. Pendharkar College (Mumbai University)',
  },
  {
    icon: Award,
    eyebrow: 'Certification',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services (AWS)',
  },
]

const Experience = () => {
  return (
    <div className="w-full bg-zinc-950 border-t border-white/[0.06] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
              02 / Experience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Where I&apos;ve{' '}
              <span className="font-serif italic font-normal text-zinc-300">
                contributed.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm">
            Hands-on engineering experience across full-stack product delivery and cloud infrastructure.
          </p>
        </Motion.div>

        {/* Minimal Hairline Experience Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {EXPERIENCES.map((exp, index) => (
            <Motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              viewport={{ once: true, amount: 0.2 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 transition-colors"
            >
              {/* Left Column: Company & Period */}
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-11 w-11 shrink-0 rounded-xl border border-white/10 bg-white p-1.5 overflow-hidden flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100 leading-snug">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs text-zinc-400">
                  <p className="text-zinc-300">
                    {exp.duration}{' '}
                    <span className="text-zinc-500">({exp.durationDetail})</span>
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Role, Impact & Stack */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                    {exp.role}
                  </h4>

                  <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-400 leading-relaxed mb-6">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-zinc-900/60 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>

        {/* Education & Certification Sub-row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {CREDENTIALS.map((cred, idx) => {
            const Icon = cred.icon
            return (
              <Motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-zinc-900/35 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 text-zinc-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">
                    {cred.eyebrow}
                  </p>
                  <h3 className="text-base font-semibold text-white">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-0.5">{cred.subtitle}</p>
                </div>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
