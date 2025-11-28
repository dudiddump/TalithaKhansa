import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';
import { Database, Code } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
        id="projects" 
        ref={ref} 
        className={`py-24 relative bg-gray-50/50 dark:bg-[#0b1120]/50 transition-all duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-purple-500/10 text-purple-500 ring-1 ring-purple-500/50">
                <Database className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white tracking-wide">
                Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Modules</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                // ARCHIVE_ACCESS: GRANTED<br/>
                Selected works and technical achievements deployed in the field.
            </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
                <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Footer Decoration */}
        <div className="mt-16 flex items-center justify-center gap-2 opacity-50">
            <div className="h-1 w-1 bg-cyan-500 rounded-full animate-ping"></div>
            <span className="font-mono text-xs text-cyan-500">END OF STREAM</span>
            <div className="h-1 w-1 bg-cyan-500 rounded-full animate-ping"></div>
        </div>

      </div>
    </section>
  );
}