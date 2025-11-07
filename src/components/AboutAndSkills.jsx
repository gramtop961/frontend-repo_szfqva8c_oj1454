import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Cpu, Gamepad2 } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
    {label}
  </span>
);

const Progress = ({ label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm text-zinc-300">
      <span>{label}</span>
      <span className="text-zinc-400">{value}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10">
      <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default function AboutAndSkills() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-zinc-200">About</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-zinc-300">
            I’m Sanjai K, a developer and tech content creator from India. I run Code Constellation and Coding
            Sanjai, where I teach coding, share projects, and explore the future of tech. I love building AI-powered
            systems, web apps, and impactful solutions that merge creativity with technology.
          </p>
          <p className="mt-3 text-zinc-300">I aim to inspire young minds to explore technology through innovation, education, and community.</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <SkillTag label="AI" />
            <SkillTag label="Space Tech" />
            <SkillTag label="Full Stack" />
            <SkillTag label="Game Dev" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-zinc-200">Skills</span>
          </div>

          <div className="grid gap-5">
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200"><Code2 className="h-4 w-4 text-purple-400"/> Frontend</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {['HTML','CSS','JavaScript','React','Tailwind CSS'].map((t) => <SkillTag key={t} label={t} />)}
              </div>
              <Progress label="Frontend" value={90} />
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200"><Code2 className="h-4 w-4 text-purple-400"/> Backend</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {['Node.js','Express.js','Python','Flask'].map((t) => <SkillTag key={t} label={t} />)}
              </div>
              <Progress label="Backend" value={80} />
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200"><Brain className="h-4 w-4 text-purple-400"/> AI & ML</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {['TensorFlow','PyTorch','OpenAI API','Deep Learning'].map((t) => <SkillTag key={t} label={t} />)}
              </div>
              <Progress label="AI & ML" value={75} />
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200"><Gamepad2 className="h-4 w-4 text-purple-400"/> Tools & Platforms</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {['GitHub','VS Code','Replit','Figma','Canva'].map((t) => <SkillTag key={t} label={t} />)}
              </div>
              <Progress label="Tools" value={85} />
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">Other</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {['Cloud Computing','Security','Networking','Blockchain'].map((t) => <SkillTag key={t} label={t} />)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
