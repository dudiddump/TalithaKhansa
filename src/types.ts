import type { ReactNode } from 'react';

export interface Project {
  title: string
  description: string
  img: string
  link: string
  color?: string
  categories: string[]
  tech?: string[]
  tools?: string[]
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string[];
  icon: ReactNode;
  color: string;
}