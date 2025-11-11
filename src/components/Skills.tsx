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
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", icon: <FaLock className="text-red-500" /> },
        { name: "System Analysis", icon: <FaDatabase className="text-indigo-400" /> },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Data Visualization", icon: <FaChartBar className="text-teal-400" /> },
      ],
    },
    {
      title: "Leadership & Collaboration",
      skills: [
        { name: "Team Management", icon: <FaUserTie className="text-pink-500" /> },
        { name: "Project Planning", icon: <FaFigma className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-12 text-center text-primary-light dark:text-primary-dark animate-fade-in">
          Skills
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((category, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-accent-light dark:hover:border-accent-dark"
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent-light dark:text-accent-dark group-hover:scale-105 transition-transform">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
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
