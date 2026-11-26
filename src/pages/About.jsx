import React from 'react'
import { motion as Motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const STACK_GROUPS = [
  {
    category: 'Frontend & Motion',
    items: [
      { name: 'React 19', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'GSAP', logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    category: 'Cloud, DevOps & Tooling',
    items: [
      { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', invert: true },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
    ],
  },
]

const HIGHLIGHTS = [
  { value: '2', label: 'Industry Internships' },
  { value: '7+', label: 'Shipped Projects' },
  { value: 'AWS', label: 'Cloud Practitioner' },
]

const About = () => {
  return (
    <div className="w-full bg-zinc-950 border-t border-white/[0.06] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 md:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
            01 / About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15]">
            Engineering seamless interfaces backed by{' '}
            <span className="font-serif italic font-normal text-zinc-300">
              dependable architecture.
            </span>
          </h2>
        </Motion.div>

        {/* Two-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Bio & Highlights */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="space-y-5 text-base md:text-[17px] text-zinc-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-zinc-100 font-medium">Aditya Sutar</span>, a
                Computer Science graduate and Full Stack Developer based in Mumbai, India.
              </p>
              <p>
                I specialize in building end-to-end web applications with{' '}
                <span className="text-zinc-200">
                  React, Next.js, Node.js, Express, and MongoDB
                </span>
                — pairing thoughtful, minimal UI design with reliable backend systems and
                secure authentication flows.
              </p>
              <p>
                As an <span className="text-zinc-200">AWS Certified Cloud Practitioner</span>{' '}
                with hands-on internship experience in both full-stack product engineering and
                cloud deployment, I focus on performance, maintainability, and clean code.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.08]">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    {item.value}
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500 mt-1 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* Categorized Tech Stack */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {STACK_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/[0.07] bg-zinc-900/35 p-5 sm:p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[11px] text-zinc-600">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-zinc-950/70 px-3.5 py-2 transition-all duration-200 hover:border-white/20 hover:bg-zinc-900"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        decoding="async"
                        width="16"
                        height="16"
                        className={`w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity ${
                          skill.invert ? 'invert' : ''
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
