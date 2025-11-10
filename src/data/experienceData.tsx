import type { Experience } from '../types';
import { Crown, Lightbulb, Megaphone, Plane, Users, Code2, UserPlus } from 'lucide-react';

export const experiences: Experience[] = [
  {
    icon: <Crown className="w-4 h-4 mx-auto text-white" />,
    title: "President",
    company: "Student Council (BEM), Cyber University",
    dates: "Feb 2025 - Current"
  },
  {
    icon: <Lightbulb className="w-4 h-4 mx-auto text-white" />,
    title: "Head of Creativity & Innovation",
    company: "Info. Systems & Tech. Association (HIMA STI)",
    dates: "April 2025 - Current"
  },
  {
    icon: <Megaphone className="w-4 h-4 mx-auto text-white" />,
    title: "Campus Ambassador",
    company: "Cyber University",
    dates: "Feb 2025 - Current"
  },
  {
    icon: <Plane className="w-4 h-4 mx-auto text-white" />,
    title: "Student Exchange Hackathon Participant",
    company: "Cyber University x Universiti Teknologi PETRONAS",
    dates: "Jun 2025 - Aug 2025"
  },
  {
    icon: <Users className="w-4 h-4 mx-auto text-white" />,
    title: "Member - HR Departement (PSDM)",
    company: "BEM Cyber University",
    dates: "Feb 2024 - Feb 2025"
  },
  {
    icon: <Code2 className="w-4 h-4 mx-auto text-white" />,
    title: "Member - HR Departement",
    company: "Coding Club Cyber University",
    dates: "Nov 2023 - June 2024"
  },
  {
    icon: <UserPlus className="w-4 h-4 mx-auto text-white" />,
    title: "Staff - HR Departement (PSDM)",
    company: "BEM Cyber University",
    dates: "Nov 2023 - Feb 2024"
  }
];