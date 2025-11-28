import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string[];
  icon: ReactNode;
  color: string; // Tambahan untuk styling gradient
}