import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaLock,
  FaFigma, FaUserTie, FaJava, FaPhp, FaAndroid
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiMysql, SiNextdotjs, 
  SiMongodb, SiSupabase, SiBurpsuite, SiCplusplus, 
  SiCanva, SiKalilinux
} from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Web & Mobile Dev",
      description: "Building responsive apps & functional interfaces.",
      borderColor: "group-hover:border-blue-500",
      skills: [
        { name: "React / Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "PHP (CI3)", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Android Studio", icon: <FaAndroid className="text-green-400" /> },
      ],
    },
    {
      title: "Cybersecurity Ops",
      description: "Vulnerability assessment & system hardening.",
      borderColor: "group-hover:border-red-500",
      skills: [
        { name: "Burp Suite", icon: <SiBurpsuite className="text-orange-500" /> },
        { name: "Nmap", icon: <MdOutlineSecurity className="text-blue-500" /> }, 
        { name: "OWASP Testing", icon: <FaLock className="text-red-500" /> },
        { name: "Kali Linux", icon: <SiKalilinux className="text-gray-800 dark:text-gray-200" /> },
      ],
    },
    {
      title: "Data Intelligence",
      description: "Managing integrity & visualization for insights.",
      borderColor: "group-hover:border-purple-500",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "Analytics", icon: <FaDatabase className="text-purple-400" /> },
      ],
    },
    {
      title: "Design",
      description: "Creative design tools",
      borderColor: "group-hover:border-pink-500",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#0b1120] transition-colors duration-500"
    >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-cyan-500/10 text-cyan-500 ring-1 ring-cyan-500/50">
                <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 dark:text-white tracking-wide">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
            </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, i) => (
            <div
              key={i}
              className={`group relative bg-white dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${category.borderColor} hover:border-opacity-50`}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold mb-2 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <p className="text-sm mb-8 text-gray-500 dark:text-gray-400 font-mono">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800/80 
                               px-3 py-2 rounded-lg border border-gray-100 dark:border-slate-700
                               group-hover:border-cyan-500/30 transition-colors duration-300"
                  >
                    <div className="text-xl">{skill.icon}</div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">{skill.name}</p>
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