import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Trophy, RotateCw } from 'lucide-react';
import { experiences } from '../data/experienceData';

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
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#0b1120] border-2 border-slate-500 md:transform md:-translate-x-1/2 flex items-center justify-center z-20 shadow-xl">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} opacity-30 blur-md`}></div>
        <div className="relative z-10 bg-[#0f172a] rounded-full p-1.5 border border-white/20 flex items-center justify-center">
            {exp.icon}
        </div>
      </div>

      {/* Flip Card Container */}
      <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'} [perspective:1000px]`}>
        {/* UBAH: min-height dinaikkan agar kartu lebih tinggi */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full min-h-[260px] md:min-h-[240px] cursor-pointer transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          
          {/* Front Side */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            {/* UBAH: Border di sini diperterang (dark:border-slate-600/50) */}
            <div className="h-full p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-300 dark:border-slate-600/50 shadow-lg flex flex-col justify-center group hover:border-cyan-500 transition-all">
               
               <div className="relative z-10 text-center space-y-4">
                  <div className={`w-14 h-14 mx-auto rounded-full bg-gradient-to-br ${exp.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full dark:bg-slate-900 rounded-full flex items-center justify-center">
                        {exp.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white leading-tight">
                        {exp.title}
                    </h3>
                    {/* Data RTIK Jakarta  */}
                    <div className="flex items-center justify-center gap-1.5 mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                    </div>
                  </div>

                  <div className="inline-block mx-auto px-4 py-1 text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/30 uppercase tracking-widest">
                      {exp.dates}
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-gray-400 flex items-center justify-center gap-2 animate-pulse uppercase tracking-[0.2em]">
                    <RotateCw className="w-3 h-3" />
                    Tap for details
                  </div>
               </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {/* UBAH: Border di sini diperterang juga */}
            <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-2xl flex flex-col justify-center relative overflow-hidden border border-white/40`}>
                <div className="absolute inset-0 bg-black/10 bg-[size:15px_15px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
                
                <div className="relative z-10">
                    <h4 className="text-base font-bold font-orbitron mb-4 border-b border-white/40 pb-2 flex items-center gap-2">
                        <Trophy className="w-5 h-5" />
                        Key Impact
                    </h4>
                    <ul className="space-y-3">
                        {exp.description.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-xs md:text-sm leading-relaxed font-medium">
                                <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-white shadow-[0_0_8px_white] shrink-0"></span>
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
    threshold: 0.05,
  });

  return (
    <section id="experience" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Briefcase className="w-6 h-6 text-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Journey</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 font-mono text-xs uppercase tracking-widest">
             // DEPLOYING_HISTORY_LOGS...
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] md:left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-slate-700 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}