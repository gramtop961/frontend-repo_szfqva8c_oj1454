import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Mail, Github, Linkedin, Instagram, Youtube, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and stars overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
            <Rocket className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-200/90">Futuristic • AI • Space Tech</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow sm:text-5xl md:text-6xl">
            Hi, I’m Sanjai <span className="align-middle">👋</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-200 sm:text-xl">
            Developer • Innovator • Creator of Code Constellation
          </p>
          <p className="max-w-2xl text-zinc-300">
            I’m a young developer passionate about AI, web development, and space-based technology—crafting
            immersive digital experiences and intelligent systems that bridge creativity with innovation.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Contact Me
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-4 text-zinc-300">
            <a href="mailto:sanjai@example.com" className="hover:text-white" aria-label="Email"><Mail className="h-5 w-5"/></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="GitHub"><Github className="h-5 w-5"/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="YouTube"><Youtube className="h-5 w-5"/></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
