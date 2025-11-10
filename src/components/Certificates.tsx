import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck } from 'lucide-react';
import Modal from './Modal';

export default function Certificates() {
  // Beri tipe pada state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certImgSrc = "Other-Certificate"; // Tautan dari CV Anda

  // Tipe untuk event handler onClick
  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section id="certificates" ref={ref} className={`py-20 opacity-0 ${inView ? 'animate-fade-in-up' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12">Licenses & Certificates</h2>
      <div className="max-w-xl mx-auto">
        <a
          href="#"
          className="certificate-item"
          onClick={handleOpenModal}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex items-center space-x-4 h-full hover:shadow-xl transition-shadow">
            <div className="flex-shrink-0">
              <ShieldCheck className="w-10 h-10 text-accent-light dark:text-accent-dark" />
            </div>
            <div>
              <h3 className="font-bold text-primary-light dark:text-primary-dark">Junior Cyber Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Issued by BNSP</p>
              <p className="text-xs mt-1 text-gray-500">Completed intensive training in information protection, internet security, access control, log management, and policy implementation.</p>
            </div>
          </div>
        </a>
      </div>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imgSrc={certImgSrc} 
      />
    </section>
  );
}