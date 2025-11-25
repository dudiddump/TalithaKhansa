import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaLock,
  FaFigma, FaUserTie, FaChartBar
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiMysql
} from "react-icons/si";

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Web Development",
      description: "Building responsive, modern, and efficient websites using the latest frameworks and technologies.",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
    },
    {
      title: "Cybersecurity",
      description: "Ensuring system and network safety through vulnerability testing and access control.",
      skills: [
        { name: "Network Security", icon: <FaLock className="text-red-500" /> },
        { name: "System Analysis", icon: <FaDatabase className="text-indigo-400" /> },
      ],
    },
    {
      title: "Data & Analytics",
      description: "Turning data into insights with visualization, processing, and analytical tools.",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Data Visualization", icon: <FaChartBar className="text-teal-400" /> },
      ],
    },
    {
      title: "Leadership & Collaboration",
      description: "Leading teams, managing projects, and creating impactful collaborations.",
      skills: [
        { name: "Team Management", icon: <FaUserTie className="text-pink-500" /> },
        { name: "Project Planning", icon: <FaFigma className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#f9fafb] to-[#eef2f3] 
                 dark:from-[#0f172a] dark:to-[#1e293b] text-gray-800 dark:text-gray-100 transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold mb-16 text-center text-primary-light dark:text-primary-dark tracking-wide">
          Skills
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((category, i) => (
            <div
              key={i}
              className="relative bg-white/60 dark:bg-slate-800/50 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 
                         dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent-light/10 
                              dark:to-accent-dark/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-semibold mb-3 text-accent-light dark:text-accent-dark">
                {category.title}
              </h3>
              <p className="text-sm mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center justify-center gap-3 bg-slate-50/70 dark:bg-slate-900/50 
                               p-4 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 border border-transparent 
                               hover:border-accent-light dark:hover:border-accent-dark"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <p className="text-sm font-medium text-center">{skill.name}</p>
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
