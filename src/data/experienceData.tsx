import type { Experience } from '../types';
import { Crown, Lightbulb, Megaphone, Plane, Users, Code2, UserPlus } from 'lucide-react';

export const experiences: Experience[] = [
  {
    title: "President",
    company: "Student Council (BEM), Cyber University",
    dates: "Feb 2025 - Current",
    description: [
      "Secured IDR 100 million grant from Kemendikbudristek (PM-BEM).",
      "Led a social innovation project supporting local tourism & economic growth.",
      "Organized 2 ASEAN-scale student events, overseeing logistics & teams."
    ],
    icon: <Crown className="w-6 h-6 text-white" />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Head of Creativity & Innovation",
    company: "Info. Systems & Tech. Association (HIMA STI)",
    dates: "April 2025 - Current",
    description: [
      "Designed and executed academic & extracurricular events for HIMASTI.",
      "Managed event logistics and coordinated multiple divisions.",
      "Collaborated with other student divisions to deliver impactful programs."
    ],
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Campus Ambassador",
    company: "Cyber University",
    dates: "Feb 2025 - Current",
    description: [
      "Represented Cyber University in outreach programs for high schools.",
      "Hosted & moderated campus workshops promoting digital literacy.",
      "Built relationships with prospective students and partners."
    ],
    icon: <Megaphone className="w-6 h-6 text-white" />,
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "Student Exchange Hackathon",
    company: "Cyber University x UTP Malaysia",
    dates: "Jun 2025 - Aug 2025",
    description: [
      "Participated in a hybrid fintech hackathon with a Malaysian team.",
      "Developed 'Pennywise', a financial literacy web app.",
      "Achieved 1st Runner Up and presented the final pitch at UTP Campus."
    ],
    icon: <Plane className="w-6 h-6 text-white" />,
    color: "from-purple-400 to-indigo-500"
  },
  {
    title: "Member - HR Departement (PSDM)",
    company: "BEM Cyber University",
    dates: "Feb 2024 - Feb 2025",
    description: [
      "Managed internal performance tracking using Google Workspace.",
      "Organized skill-building webinars and coding workshops.",
      "Assisted in recruitment and selection of new executive members."
    ],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Member - HR Departement",
    company: "Coding Club Cyber University",
    dates: "Nov 2023 - June 2024",
    description: [
      "Organized internal workshops and coding events.",
      "Managed competition participation and team coordination.",
      "Explored programming (Python, C++) and UI/UX design in club activities."
    ],
    icon: <Code2 className="w-6 h-6 text-white" />,
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Staff - HR Departement (PSDM)",
    company: "BEM Cyber University",
    dates: "Nov 2023 - Feb 2024",
    description: [
      "Assisted in planning and coordinating student skill-development events.",
      "Supported documentation and performance monitoring processes."
    ],
    icon: <UserPlus className="w-6 h-6 text-white" />,
    color: "from-teal-400 to-emerald-400"
  }
];