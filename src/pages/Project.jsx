import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import img1 from '../assets/i1.png'
import img2 from '../assets/i2.png'
import img3 from '../assets/i3.png'
import img4 from '../assets/i4.png'
import img5 from '../assets/i5.png'
import img6 from '../assets/i6.png'
import img7 from '../assets/i7.png'

const EASE = [0.22, 1, 0.36, 1]

const PROJECTS = [
  {
    id: 'photoshare',
    title: 'Photo Share',
    category: 'Full Stack',
    description:
      'Full-stack event photo selection platform enabling photographers to upload client galleries to Google Drive, compress assets, and share view-only selection links with zero client signup.',
    image: img5,
    link: 'https://selectyourphoto.vercel.app/',
    codeLink: 'https://github.com/Editorhacker/photoshare',
    tags: ['React', 'Node.js', 'Google Drive API', 'OAuth2', 'JWT'],
    featured: true,
  },
  {
    id: 'thunder',
    title: 'Thunder Game Cafe',
    category: 'Frontend',
    description:
      'Responsive web experience for a modern gaming cafe showcasing hardware rigs, tournaments, events, and booking flows with clean interactive motion.',
    image: img6,
    link: 'https://thunder-management-six.vercel.app/',
    codeLink: 'https://github.com/Editorhacker/thunder-management',
    tags: ['React', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 'kalastra',
    title: 'Kalastra',
    category: 'Frontend',
    description:
      'Modern apparel storefront built to highlight seasonal collections, product storytelling, and responsive visual merchandising.',
    image: img7,
    link: 'https://kalastrastyle.com/',
    codeLink: 'https://github.com/Editorhacker/Kalasatra',
    tags: ['React', 'Tailwind CSS', 'E-Commerce UI'],
  },
  {
    id: 'invoice',
    title: 'Invoice Generator',
    category: 'Full Stack',
    description:
      'Streamlined billing and invoice creation app built with Next.js, enabling users to generate itemized product invoices cleanly.',
    image: img4,
    link: 'https://billkar.vercel.app',
    codeLink: 'https://github.com/Editorhacker/Invoice',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'kamdone',
    title: 'KamDone',
    category: 'Full Stack',
    description:
      'Service agency web application built with React and Node.js where customers browse offerings and book services directly.',
    image: img3,
    link: 'https://kamdone.vercel.app',
    codeLink: 'https://github.com/Editorhacker/KamDone',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    id: 'art-photos',
    title: 'Art Photos Studio',
    category: 'Frontend',
    description:
      'Minimalist creative photography portfolio focused on visual hierarchy, fast image delivery, and uncluttered gallery browsing.',
    image: img1,
    link: 'https://art-photos-studio.vercel.app/',
    codeLink: 'https://github.com/Editorhacker/Art-photos',
    tags: ['React', 'Tailwind CSS', 'Portfolio'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description:
      'Full-featured online store built with React and Node.js featuring cart state management, payment processing, and user authentication.',
    image: img2,
    link: null,
    codeLink: 'https://github.com/Editorhacker',
    tags: ['React', 'Node.js', 'MongoDB', 'Auth'],
  },
]

const FILTERS = ['All', 'Full Stack', 'Frontend']

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <div className="w-full bg-zinc-950 border-t border-white/[0.06] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header + Minimal Filter */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
              03 / Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Built for real users,{' '}
              <span className="font-serif italic font-normal text-zinc-300">
                shipped to production.
              </span>
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/60 p-1 self-start md:self-auto"
          >
            {FILTERS.map((filter) => {
              const selected = activeFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selected
                      ? 'bg-white text-zinc-950 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </Motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => {
            const isFeatured = activeFilter === 'All' && index === 0
            const indexLabel = String(index + 1).padStart(2, '0')

            return (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24), ease: EASE }}
                viewport={{ once: true, amount: 0.12 }}
                className={`group rounded-2xl border border-white/[0.08] bg-zinc-900/35 overflow-hidden transition-colors duration-300 hover:border-white/20 ${
                  isFeatured
                    ? 'md:col-span-2 grid grid-cols-1 lg:grid-cols-12'
                    : 'flex flex-col'
                }`}
              >
                {/* Image Viewport */}
                <div
                  className={`relative overflow-hidden bg-zinc-900 ${
                    isFeatured
                      ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[340px]'
                      : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />

                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-zinc-950/75 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-200">
                    {isFeatured ? `${indexLabel} · Featured` : indexLabel}
                  </span>
                </div>

                {/* Card Content */}
                <div
                  className={`p-6 sm:p-8 flex flex-col justify-between ${
                    isFeatured ? 'lg:col-span-5' : 'flex-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.07] bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-5 pt-4 border-t border-white/[0.07]">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                        >
                          Live Site
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}

                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </Motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
