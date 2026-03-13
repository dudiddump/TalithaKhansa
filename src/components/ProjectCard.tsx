import type { Project } from '../types';
import { ExternalLink, Shield, Code, Layout, Box, Maximize2 } from 'lucide-react';

interface ProjectCardProps extends Project {
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, img, link, categories, tech, tools, onOpenDetails } = props;
  const isLinkAvailable = link && link !== "#";

  return (
    <div
      onClick={() => onOpenDetails(props)}
      className="group relative block h-full cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

      <div className="relative h-full bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-300 dark:border-slate-600/50 overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-y-2">
        
        <div className="relative h-48 overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <span className="flex items-center gap-2 text-white font-mono text-xs font-bold bg-cyan-600 px-4 py-2 rounded-full">
                    <Maximize2 size={14} /> VIEW DETAILS
                </span>
            </div>

            <div className="absolute top-3 left-3 z-30 flex flex-wrap gap-2">
                {categories?.map((cat) => (
                    <span key={cat} className="px-2 py-1 text-[9px] font-bold font-mono text-white bg-black/70 backdrop-blur-md border border-white/10 rounded flex items-center gap-1 uppercase">
                        {cat}
                    </span>
                ))}
            </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white group-hover:text-cyan-500 mb-2 leading-tight">
                {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 font-sans">
                {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
                {tech?.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 rounded">
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray-400">STATUS: DEPLOYED [cite: 5]</span>
                {isLinkAvailable && (
                    <a 
                      href={link} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}