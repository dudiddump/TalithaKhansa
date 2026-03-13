import React from "react";
import {
  FaNodeJs,
  FaLock,
  FaFileExcel,
  FaFigma,
  FaJava,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiSupabase,
  SiBurpsuite,
  SiCanva,
  SiKalilinux,
  SiMongodb,
  SiNotion,
} from "react-icons/si";

import { ShieldCheck, Code2, Eye } from "lucide-react";

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Security & Governance",
      description: "ISMS Standards & Technical Vulnerability Assessment.",
      borderColor: "group-hover:border-cyan-500",
      skills: [
        { name: "ISO/IEC 27001", icon: <ShieldCheck className="text-cyan-500" /> },
        { name: "Burp Suite", icon: <SiBurpsuite className="text-orange-500" /> },
        { name: "Nmap", icon: <Eye className="text-blue-400" /> },
        { name: "OWASP Top 10", icon: <FaLock className="text-red-500" /> },
        { name: "Kali Linux", icon: <SiKalilinux className="text-gray-400" /> },
        { name: "Log Analysis", icon: <Code2 className="text-green-500" /> },
      ],
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern frameworks.",
      borderColor: "group-hover:border-blue-500",
      skills: [
        {name: "React / Next.js", icon: <SiNextdotjs className="text-white bg-black rounded-full" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "PHP (CI3)", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Data & Productivity",
      description: "Information management & strategic tracking.",
      borderColor: "group-hover:border-purple-500",
      skills: [
        { name: "Basic Excel", icon: <FaFileExcel className="text-green-600" /> },
        { name: "Google Workspace", icon: <ShieldCheck className="text-blue-500" /> },
        { name: "Notion", icon: <SiNotion className="text-black dark:text-white" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      ],
    },
    {
      title: "Creative Design",
      description: "UI/UX Prototyping & Visual Communication.",
      borderColor: "group-hover:border-pink-500",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-indigo-400" /> },
        { name: "Prototyping", icon: <Code2 className="text-orange-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-white dark:bg-[#0b1120] transition-colors duration-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-cyan-500/10 text-cyan-500 ring-1 ring-cyan-500/50">
            <Code2 className="w-6 h-6" />
          </div>

          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group relative bg-white dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${category.borderColor} hover:border-opacity-50`}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-2 text-gray-800 dark:text-white">
                {category.title}
              </h3>

              <p className="text-sm mb-8 text-gray-500 dark:text-gray-400 font-mono italic">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800/50 
                    px-4 py-2 rounded-xl border border-gray-100 dark:border-slate-700
                    group-hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="text-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;