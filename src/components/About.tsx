import MyPhoto from '../assets/MyPhoto.jpg';
import { useInView } from 'react-intersection-observer';
import { Terminal, Cpu } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative py-24 overflow-hidden transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* --- CYBER BACKGROUND --- */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex items-center gap-3 mb-16 justify-center">
            <Cpu className="w-8 h-8 text-cyan-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                About Me
            </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      
          <div className="relative group md:w-1/3 w-3/4 max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-gradient-xy"></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                    src={MyPhoto}
                    alt="Talitha Khansa Fahira"
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 aspect-[3/4]"
                />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-black/80 text-cyan-400 text-xs font-mono px-3 py-1 rounded border border-cyan-500/50 backdrop-blur-md">
                IMG_ID: TKF_01
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-300">
                
                <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 font-mono text-xs text-gray-400">user@talitha:~/profile</span>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-sans">
                  Hi, I’m <span className="font-bold text-cyan-600 dark:text-cyan-400">Talitha Khansa Fahira</span>.
                  <br className="hidden md:block" />
                  I’m a 5th semester <span className="font-semibold text-slate-700 dark:text-slate-300">Information Systems & Technology</span> student 
                  at <span className="font-semibold text-slate-700 dark:text-slate-300">Cyber University</span> with a <span className="font-bold text-green-600 dark:text-green-400 font-mono">GPA of 3.95/4.00</span>.
                </p>
                
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently serving as the <span className="font-bold text-purple-600 dark:text-purple-400">President of the Student Council (BEM)</span>, 
                  I have honed strong <span className="font-medium text-cyan-600 dark:text-cyan-400">leadership, analytical, and creative skills</span>.
                  I thrive in collaborative environments, blending my passion for data and technology.
                </p>

                {/* Skill Badges */}
                <div className="pt-6 flex flex-wrap gap-3">
                    {['Leadership', 'Web Development', 'Cybersecurity', 'Data Analytics'].map((skill) => (
                    <span key={skill} className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-cyan-500/20 transition-all cursor-default">
                        <Terminal className="w-3 h-3" />
                        {skill}
                    </span>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}