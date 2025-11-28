import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Trophy, RotateCw } from 'lucide-react';
import { experiences } from '../data/experienceData'; // Import data dari file terpisah

const ExperienceItem = ({ exp, index }: { exp: any, index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-4 md:gap-6 ${
        isEven ? 'md:flex-row-reverse' : ''
      } transition-all duration-1000 transform ${
        inView 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 translate-y-12 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
      }`}
    >
      {/* --- TIMELINE ICON (NODE) --- */}
      <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#0b1120] border-2 border-gray-700 md:transform md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} opacity-20 blur-md group-hover:opacity-60 transition-opacity duration-500`}></div>
        <div className="relative z-10 bg-[#0f172a] rounded-full p-1.5 border border-white/10 flex items-center justify-center">
            {exp.icon}
        </div>
      </div>

      {/* --- FLIP CARD CONTAINER --- */}
      {/* Container utama diberi perspective agar efek 3D muncul */}
      <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'} [perspective:1000px]`}>
        
        {/* Card Wrapper dengan event Click untuk Flip */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full min-h-[180px] cursor-pointer transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          
          {/* === FRONT SIDE (Tampilan Depan: Info Utama) === */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="h-full p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-slate-800 shadow-lg flex flex-col justify-center group hover:border-cyan-500/50 transition-all">
               
               <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

               <div className="relative z-10 text-center space-y-2">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${exp.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full dark:bg-slate-900 rounded-full flex items-center justify-center">
                        {exp.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold font-orbitron text-gray-900 dark:text-white leading-tight">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                    </div>
                    <div className="inline-block px-3 py-1 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                        {exp.dates}
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-gray-400 flex items-center justify-center gap-1 animate-pulse uppercase tracking-widest">
                    <RotateCw className="w-3 h-3" />
                    Tap for achievements
                  </div>
               </div>
            </div>
          </div>

          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className={`h-full p-5 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-xl flex flex-col justify-center relative overflow-hidden border border-white/20`}>
                
                <div className="absolute inset-0 bg-black/20 bg-[size:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
                
                <div className="relative z-10">
                    <h4 className="text-base font-bold font-orbitron mb-3 border-b border-white/30 pb-1.5 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Achievements
                    </h4>
                    <ul className="space-y-2">
                        {exp.description.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed font-medium">
                                <span className="mt-1.5 min-w-[5px] h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></span>
                                <span className="text-white/95">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      ref={ref} 
      className={`py-20 relative overflow-hidden transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            <Briefcase className="w-6 h-6 text-cyan-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-500 tracking-wide">
            Experience
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 font-mono text-xs md:text-sm">
             // SYSTEM_LOGS: TAP CARDS TO REVEAL DATA...
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent transform md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}