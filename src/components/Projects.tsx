import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';
import { Database, Shield, Code, Layout, Box } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = [
    { name: 'All', icon: <Database size={16} /> },
    { name: 'Cybersecurity', icon: <Shield size={16} /> },
    { name: 'Web Development', icon: <Code size={16} /> },
    { name: 'UI/UX Design', icon: <Layout size={16} /> },
    { name: 'Other', icon: <Box size={16} /> }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeTab));

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    
    <section id="projects" ref={ref} className={`py-24 relative bg-gray-50/50 dark:bg-[#0b1120]/50 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white">
                Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Modules</span>
            </h2>
            <p className="mt-4 text-gray-500 font-mono text-xs uppercase tracking-widest">// CLASSIFIED_PROJECTS_DATABASE</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-[10px] font-bold uppercase transition-all duration-300 border 
                ${activeTab === tab.name 
                  ? 'bg-purple-600 border-purple-500 text-white shadow-xl shadow-purple-500/40 translate-y-[-2px]' 
                  : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 text-gray-500 hover:border-purple-500/50'
                }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Grid Project dengan Animasi Filter */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {filteredProjects.map((project, index) => (
            <div 
                key={`${activeTab}-${project.title}`}
                className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}