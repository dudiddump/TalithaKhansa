import { Linkedin, Github, Instagram, FileText, Terminal } from 'lucide-react';
import ResumePDF from '../assets/Resume.pdf'; 

export default function Hero() {
  return (
    // UBAH: min-h dikurangi jadi 80vh dan pt (padding top) dikurangi biar agak naik
    <section id="hero" className="relative text-center pt-20 pb-20 min-h-[10vh] flex flex-col justify-center items-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      {/* Glowing Orbs - Dipindah posisinya dikit biar balance */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-light/30 dark:bg-primary-dark/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent-light/30 dark:bg-accent-dark/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="space-y-8 animate-fade-in-up z-10 relative px-4">
        
        {/* --- 1. NEW PORTOFOLIO LABEL (Terminal Style) --- */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300">
          <Terminal className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span className="font-mono text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
            System: Online // Portofolio
          </span>
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
        </div>

        {/* --- 2. MAIN TITLE (FULL GRADIENT SEKARANG) --- */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight leading-tight">
            {/* UBAH: Gabungin namanya jadi satu span gradient biar kompak */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 drop-shadow-lg">
              Talitha Khansa <br className="md:hidden" /> Fahira
            </span>
          </h1>
          
          {/* Hiasan kecil di pojok nama */}
          <span className="absolute -top-6 -right-6 md:-top-4 md:-right-8 text-xs font-mono text-cyan-500/50 rotate-12">
            &lt;/Dev&gt;
          </span>
        </div>
        
        {/* --- 3. SUBTITLE --- */}
        <div className="space-y-2">
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 font-mono">
            Information Systems & Technology Student
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-widest uppercase">
            Cyber University • Future Leader • Tech Enthusiast
            </p>
        </div>
        
        {/* --- 4. DESCRIPTION --- */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4 border-l-2 border-primary-light/50 dark:border-primary-dark/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          5th-semester student with a <span className="font-bold text-green-600 dark:text-green-400 font-mono bg-green-100 dark:bg-green-900/30 px-1 rounded">GPA 3.95</span>. 
          President of Student Council (BEM) blending data, security, and creativity to build impactful digital solutions.
        </p>

        {/* --- 5. SOCIAL BUTTONS (Glowing Hover) --- */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-8">
          <SocialLink href="https://linkedin.com/in/talithakhansa" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
          <SocialLink href="https://github.com/dudiddump" icon={<Github className="w-5 h-5" />} label="GitHub" />
          <SocialLink href="https://www.instagram.com/talithakf_26" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
          <SocialLink href={ResumePDF} icon={<FileText className="w-5 h-5" />} label="Resume" isPrimary />
        </div>
      </div>
    </section>
  );
}

// Component Tombol yang sudah dipercantik
function SocialLink({ href, icon, label, isPrimary = false }: { href: string; icon: React.ReactNode; label: string, isPrimary?: boolean }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className={`
        group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden
        ${isPrimary 
            ? 'bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105' 
            : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:-translate-y-1'
        }
      `}
    >
      {/* Efek kilat saat hover */}
      <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
      
      <span className="relative z-10">{icon}</span>
      <span className="relative z-10 text-sm font-bold font-orbitron">{label}</span>
    </a>
  );
}