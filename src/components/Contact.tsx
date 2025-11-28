import { Mail, Send, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#050914]">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 mb-8 animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-gray-600 dark:text-gray-300">Status: Open to Work</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white mb-6">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Communication</span>
        </h2>
        
        <p className="max-w-xl mx-auto mb-10 text-gray-600 dark:text-gray-300 font-mono text-sm md:text-base leading-relaxed">
           I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
           <br/>
           <span className="text-cyan-500">// Waiting for incoming signal...</span>
        </p>

        <a 
            href="mailto:its.ithaaa@gmail.com" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-cyan-600 font-orbitron rounded-full hover:bg-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] focus:outline-none ring-offset-2 focus:ring-2 ring-cyan-400"
        >
            {/* Tech Decoration on Button */}
            <span className="absolute inset-0 rounded-full border border-white/20"></span>
            
            <Mail className="w-5 h-5 mr-2 animate-pulse" />
            <span className="mr-2">ESTABLISH CONNECTION</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        {/* Footer Terminal Text (Pengganti Footer Lama) */}
        <div className="mt-24 flex flex-col items-center gap-4 opacity-60">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent max-w-xs"></div>
            
            <div className="flex flex-col items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-500" />
                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                    © {new Date().getFullYear()} Talitha Khansa Fahira. <br className="sm:hidden" /> 
                    Built with <span className="text-red-500 animate-pulse">❤️</span> & Code. 
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold ml-1">System.exit(0);</span>
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}