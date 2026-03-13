import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Maximize2, FileCheck, Database } from 'lucide-react';
import Modal from './Modal';

import certCyberSec from '../assets/JuniorCyberSec.jpg'; 
import certISO from '../assets/CertISO27001.pdf';
import certDataScience from '../assets/CertDataScience.pdf';

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  imgSrc: string;
  id: string;
  icon: React.ReactNode;
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
      issuer: 'BNSP (LSP Informatika)',
      description:
        'Certified competence in Access Control, Log Managing, Vulnerability Assessment, and Information Security Policy Implementation.',
      imgSrc: certCyberSec,
      id: 'Reg. TIK.317.02593 2025',
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'ISO/IEC 27001:2022 Security Associate',
      issuer: 'SkillFront',
      description:
        'Demonstrated knowledge in Information Security Management Systems (ISMS) standards and subject matter expertise in security frameworks.',
      imgSrc: certISO,
      id: 'ID: 13790676467847',
      icon: <Award className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cisco Networking Academy',
      description:
        'Proficient in explaining data analytics challenges and the role of data in AI/Machine Learning models.',
      imgSrc: certDataScience,
      id: 'Issued: March 04, 2026',
      icon: <Database className="w-6 h-6 text-blue-500" />,
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
        inView ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-cyan-500/10 text-cyan-500 ring-1 ring-cyan-500/50">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white tracking-wide">
                Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Credentials</span>
            </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(cert)}
              className="group relative bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-800 p-1 cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
              
              <div className="h-full bg-white dark:bg-[#0b1120] rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full"></div>
                
                <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-gray-100 dark:border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                        {cert.icon}
                    </div>
                    
                    <div>
                        <h3 className="font-bold font-orbitron text-gray-900 dark:text-white text-lg leading-tight group-hover:text-cyan-500 transition-colors">
                            {cert.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
                            <FileCheck className="w-3 h-3" />
                            {cert.issuer}
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 italic">
                        "{cert.description}"
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[9px] font-mono text-gray-400 uppercase">{cert.id}</span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 group-hover:gap-2 transition-all">
                        VERIFY <Maximize2 className="w-3 h-3" />
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