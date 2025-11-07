import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Globe2, Video, Telescope, Satellite } from 'lucide-react';

const projects = [
  {
    title: 'AgriSense-PINN',
    description: 'AI-powered precision agriculture using Physics-Informed Neural Networks to optimize yield and resources.',
    tags: ['AI','PINNs','Agriculture','Python'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Space Weather Prediction System',
    description: 'Predicts solar storms using machine learning with interactive visualization dashboards.',
    tags: ['ML','Visualization','Space'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Programming Language Translator',
    description: 'Converts code between languages using OpenAI API and static analysis for accurate translation.',
    tags: ['OpenAI','NLP','DevTools'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Code Constellation Website',
    description: 'A platform offering coding resources, videos, and courses for learners and creators.',
    tags: ['Web','Education','React'],
    links: { demo: '#', github: '#' },
  },
];

function Tag({ children }) {
  return <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-300 ring-1 ring-white/10">{children}</span>;
}

function ProjectCard({ p, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-xl shadow-purple-500/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <Telescope className="h-4 w-4 text-purple-400 opacity-80" />
      </div>
      <p className="min-h-[60px] text-sm text-zinc-300">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onOpen(p)} className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white hover:bg-purple-500">
          View Project <ExternalLink className="h-3.5 w-3.5" />
        </button>
        <a href={p.links.github} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20">
          GitHub Link <Github className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

function Modal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xl font-semibold text-white">{project?.title}</h4>
              <button onClick={onClose} className="rounded-md bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20">Close</button>
            </div>
            <p className="text-zinc-300">{project?.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <a href={project?.links.demo} className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-2 text-xs font-semibold text-white hover:bg-purple-500">
                Live Demo <Globe2 className="h-3.5 w-3.5" />
              </a>
              <a href={project?.links.github} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20">
                Repository <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContentCreator() {
  return (
    <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
        <Video className="h-4 w-4 text-purple-400" />
        <span className="text-sm text-zinc-200">Content Creator</span>
      </div>
      <p className="text-zinc-300">
        I run the Code Constellation and Coding Sanjai pages to teach and inspire others through coding tips,
        project showcases, and AI tools.
      </p>

      {/* Embeds */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
          <iframe
            className="h-full w-full"
            src="https://www.instagram.com/p/CxJ9Tx8M0mX/embed"
            title="Instagram post"
          ></iframe>
        </div>
      </div>

      {/* Carousel mimic */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="aspect-video rounded-lg bg-white/5 ring-1 ring-white/10" />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsAndContent() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onOpen = (p) => { setSelected(p); setOpen(true); };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
        <Satellite className="h-4 w-4 text-purple-400" />
        <span className="text-sm text-zinc-200">Projects</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} onOpen={onOpen} />
        ))}
      </div>

      <ContentCreator />

      <Modal open={open} onClose={() => setOpen(false)} project={selected} />
    </section>
  );
}
