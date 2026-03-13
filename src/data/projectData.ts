import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "PortSwigger Lab Report",
    categories: ["Cybersecurity"],
    description: "Vulnerability assessments on OWASP Top 10 labs using Burp Suite and Nmap to document security flaws.",
    tech: ["Penetration Testing", "Security Audit"],
    tools: ["Burp Suite", "Nmap", "Linux"],
    img: "https://placehold.co/600x400/334155/e2e8f0?text=Pentest+Report",
    link: "https://medium.com/@its.ithaaa/cyber-security-report-lab-port-swigger-2a2daa2f23cc",
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Pennywise (1st Runner-Up)",
    categories: ["Web Development", "UI/UX Design"],
    description: "Financial literacy web app developed for CU × UTP 2025 Hackathon using Next.js.",
    tech: ["Next.js", "React", "Python"],
    tools: ["Figma", "Node.js", "Tailwind CSS"],
    img: "https://placehold.co/600x400/bfdbfe/1e3a8a?text=Pennywise+App",
    link: "https://github.com/dudiddump/Pennywise",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Dompetia (Team Leader)",
    categories: ["Web Development", "UI/UX Design"],
    description: "Data-driven financial management prototype for Bank Indonesia & OJK Hackathon.",
    tech: ["JavaScript", "HTML", "CSS"],
    tools: ["Figma", "Data Analytics"],
    img: "https://placehold.co/600x400/dcfce7/15803d?text=Dompetia",
    link: "https://github.com/dudiddump/Dompetia",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "BudayaGo / Kawi App",
    categories: ["UI/UX Design"],
    description: "Gamified mobile app prototype for Indonesian cultural preservation.",
    tech: ["Android Studio", "UI/UX Design"],
    tools: ["Figma", "Canva", "Prototyping"],
    img: "https://placehold.co/600x400/fecdd3/be123c?text=Kawi+App",
    link: "https://www.canva.com/design/DAG3QGvxyvs/LjbD1YnAwHRBZ236hAnpzw/view",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "PM-BEM Grant Awardee",
    categories: ["Other"],
    description: "Led a social innovation project funded by a IDR 100M grant from Kemendikbudristek[cite: 35].",
    tech: ["Leadership", "Innovation"],
    tools: ["Strategic Planning", "Resource Allocation"],
    img: "https://placehold.co/600x400/c7d2fe/1e3a8a?text=BEM+Grant",
    link: "#",
    color: "from-slate-700 to-slate-900"
  },
  {
    title: "CyberCareer",
    categories: ["Web Development"],
    description: "Career management platform built with PHP CodeIgniter 3 for internship monitoring[cite: 51, 53].",
    tech: ["PHP (CodeIgniter 3)"],
    tools: ["MySQL", "Bootstrap", "Web Server"],
    img: "https://placehold.co/600x400/ccfbf1/0f766e?text=CyberCareer+PHP",
    link: "https://github.com/dudiddump/CyberCareer",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Lutharti Restaurant System",
    categories: ["Web Development", "Other"],
    description: "University project developing a restaurant system using Object-Oriented Programming.",
    tech: ["C++"],
    tools: ["OOP", "Data Structures"],
    img: "https://placehold.co/600x400/e0e7ff/3730a3?text=C%2B%2B+Project",
    link: "https://github.com/dudiddump/Pemesanan",
    color: "from-indigo-500 to-blue-700"
  }
];