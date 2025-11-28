import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Maximize2, FileCheck } from 'lucide-react';
import Modal from './Modal';
import certCyberSec from '../assets/CerCyberSec.jpg';

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  imgSrc: string;
}

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates: Certificate[] = [
    {
      title: 'Junior Cyber Security',
      issuer: 'BNSP',
      description:
        'Completed intensive training in information protection, internet security, access control, log management, and policy implementation.',
      imgSrc: certCyberSec,
    },
  ];

  const handleOpenModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-green-500/10 text-green-500 ring-1 ring-green-500/50">
                <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white tracking-wide">
                Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Credentials</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 font-mono text-sm">
                // DATABASE_ACCESS: AUTHORIZED
            </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(cert)}
              className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700 p-1 cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"></div>
              
              <div className="h-full bg-white dark:bg-[#0b1120] rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                            <Award className="w-6 h-6 text-green-500" />
                        </div>
                    </div>
                    
                    <div className="flex-grow">
                        <h3 className="font-bold font-orbitron text-gray-900 dark:text-white text-lg leading-tight group-hover:text-green-500 transition-colors">
                            {cert.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                            <FileCheck className="w-3 h-3" />
                            {cert.issuer}
                        </div>
                        <p className="text-sm mt-3 text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                            {cert.description}
                        </p>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gray-400">ID: CERT_{index + 101}</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform">
                        VIEW CREDENTIAL <Maximize2 className="w-3 h-3" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imgSrc={selectedCert.imgSrc}
        />
      )}
    </section>
  );
}