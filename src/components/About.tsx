import MyPhoto from '../assets/MyPhoto.jpg';
import { useInView } from 'react-intersection-observer';
import { Terminal, Cpu, Shield, Code2, Globe } from 'lucide-react';

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
          {/* Profile Photo Section */}
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
                STATUS: ACTIVE_6TH_SEM
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:w-2/3 space-y-6">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-300 shadow-xl">
                
                <div className="flex items-center gap-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 font-mono text-xs text-gray-400 italic">talithakhansa.web.id --profile</span>
                </div>

                <div className="space-y-4 text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-sans">
                  <p>
                    Hi, I’m <span className="font-bold text-cyan-600 dark:text-cyan-400">Talitha Khansa Fahira</span>.
                    I’m a 6th-semester <span className="font-semibold text-slate-700 dark:text-slate-300">Information Systems & Technology</span> student 
                    at <span className="font-semibold text-orange-700 dark:text-orange-300">Cyber University</span> with a <span className="font-bold text-cyan-600 dark:text-cyan-400 font-mono">GPA of 3.96/4.00</span>.
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    My focus lies at the intersection of <span className="text-cyan-600 dark:text-cyan-400 font-medium">Cybersecurity and Web Development</span>. 
                    I'm a certified <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">Junior Cyber Security Analyst (BNSP)</span> and 
                    active as a <span className="font-medium">Next Gen Member at RTIK Jakarta</span>, contributing to digital literacy programs.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300">
                    With a background in student leadership, I blend analytical thinking with technical expertise to build secure and scalable digital solutions.
                  </p>
                </div>
                
                {/* Updated Skill Badges */}
                <div className="pt-8 flex flex-wrap gap-3">
                  {[
                    { name: 'Cybersecurity', icon: <Shield className="w-3 h-3" /> },
                    { name: 'Web Development', icon: <Code2 className="w-3 h-3" /> },
                    { name: 'ISO/IEC 27001', icon: <Terminal className="w-3 h-3" /> },
                    { name: 'Digital Advocacy', icon: <Globe className="w-3 h-3" /> }
                  ].map((skill) => (
                    <span key={skill.name} className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-500/20 transition-all cursor-default group/badge shadow-sm">
                        {skill.icon}
                        {skill.name}
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