import type { Project } from '../types';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

export default function ProjectCard({ title, description, img, link }: Project) {
  const isLinkAvailable = link && link !== "#";

  return (
    <a
      href={isLinkAvailable ? link : undefined} 
      target={isLinkAvailable ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative block h-full ${!isLinkAvailable ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {/* Glow Effect behind card */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

      <div className="relative h-full bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
        
        {/* Image Container with Tech Overlay */}
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            
            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20 pointer-events-none"></div>

            <img 
                src={img} 
                alt={title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
            />
            
            {/* Type Badge */}
            <div className="absolute top-3 right-3 z-30">
                <span className="px-3 py-1 text-xs font-bold font-mono text-white bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2">
                    <FolderOpen className="w-3 h-3 text-cyan-400" />
                    PROJECT
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative">
            {/* Grid Pattern in content bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

            <h3 className="relative z-10 text-xl font-bold font-orbitron text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors mb-2">
                {title}
            </h3>
            
            <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 flex-grow leading-relaxed font-mono">
                {description}
            </p>

            {/* Footer / Action */}
            <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-medium text-gray-500 dark:text-gray-500">
                <span>STATUS: {isLinkAvailable ? 'DEPLOYED' : 'ARCHIVED'}</span>
                {isLinkAvailable && (
                    <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                        ACCESS <ExternalLink className="w-3 h-3" />
                    </div>
                )}
            </div>
        </div>
      </div>
    </a>
  );
}