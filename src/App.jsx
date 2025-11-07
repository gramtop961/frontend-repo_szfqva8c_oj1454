import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import AboutAndSkills from './components/AboutAndSkills.jsx';
import ProjectsAndContent from './components/ProjectsAndContent.jsx';
import ContactAndFooter from './components/ContactAndFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/40 selection:text-white">
      <Hero3D />
      <AboutAndSkills />
      <ProjectsAndContent />
      <ContactAndFooter />
    </div>
  );
}
