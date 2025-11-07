import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Youtube, Trophy, Users, Award } from 'lucide-react';

export default function ContactAndFooter() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate submission animation. Integrate EmailJS easily by replacing this block.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-16">
      {/* Achievements / Roles */}
      <div className="mb-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
          <Trophy className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-zinc-200">Achievements & Roles</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <Users className="mb-2 h-5 w-5 text-purple-400" />
            <p className="text-sm text-zinc-200">Upcoming President of VECODERS Club</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <Award className="mb-2 h-5 w-5 text-purple-400" />
            <p className="text-sm text-zinc-200">Organizer of EXPLOITS Symposium</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <Award className="mb-2 h-5 w-5 text-purple-400" />
            <p className="text-sm text-zinc-200">Featured developer and innovator</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
          <Mail className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-zinc-200">Contact</span>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-zinc-900/80 p-3 text-sm text-white placeholder-zinc-400 outline-none ring-0 focus:border-purple-500" />
          <input name="email" type="email" required placeholder="Your email" className="rounded-lg border border-white/10 bg-zinc-900/80 p-3 text-sm text-white placeholder-zinc-400 outline-none ring-0 focus:border-purple-500" />
          <textarea name="message" required placeholder="Your message" rows="5" className="md:col-span-2 rounded-lg border border-white/10 bg-zinc-900/80 p-3 text-sm text-white placeholder-zinc-400 outline-none ring-0 focus:border-purple-500"></textarea>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <button type="submit" disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 disabled:opacity-60">
              {status==='loading' ? 'Sending...' : status==='sent' ? 'Message Sent!' : 'Send Message'}
            </button>
            <div className="flex items-center gap-4 text-zinc-300">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"> <Linkedin className="h-5 w-5"/> </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"> <Github className="h-5 w-5"/> </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white"> <Instagram className="h-5 w-5"/> </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white"> <Youtube className="h-5 w-5"/> </a>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row">
        <p>© 2025 Sanjai K — Made with 💜 and Code.</p>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </section>
  );
}
