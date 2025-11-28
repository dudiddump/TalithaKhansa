import { useInView } from 'react-intersection-observer';
import CyberLogo from '../assets/CyberUniv.png';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      ref={ref}
      className={`relative py-24 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16">
            <GraduationCap className="w-10 h-10 text-cyan-500" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-800 dark:text-white">
                Education <span className="text-cyan-500">History</span>
            </h2>
        </div>

        <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row gap-8 items-start">
            
                <div className="flex-shrink-0 mx-auto md:mx-0 w-32 h-32 p-4 bg-white rounded-2xl shadow-inner flex items-center justify-center border border-gray-100">
                    <img
                    src={CyberLogo}
                    alt="Cyber University Logo"
                    className="w-full h-full object-contain"
                    />
                </div>

                <div className="flex-grow space-y-4 text-center md:text-left w-full">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                        <div>
                            <h3 className="text-3xl font-bold font-orbitron text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
                                Cyber University
                            </h3>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-1">
                                Bachelor of Computer Science
                            </p>
                            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-mono">
                                Major in Information Systems & Technology
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center md:items-end gap-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-700">
                                <Calendar className="w-4 h-4" />
                                Sept 2023 - Current
                            </span>
                            <div className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <span className="text-sm font-bold text-green-600 dark:text-green-400 font-mono tracking-wider">
                                    GPA: 3.95 / 4.00
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-4"></div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-gray-700 dark:text-gray-200 font-semibold">
                            <BookOpen className="w-4 h-4 text-cyan-500" />
                            <span>Relevant Courses:</span>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {[
                                "Data Analytics", 
                                "Software Development", 
                                "Database Systems", 
                                "Cyber Security Fundamentals", 
                                "UI/UX Design Principles"
                            ].map((course, idx) => (
                                <span key={idx} className="text-xs font-mono font-medium px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
                                {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;