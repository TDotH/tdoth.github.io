import type { Ref } from "react";

export interface SectionProps {
  ref?: Ref<HTMLElement | null>;
  sectionName: string;
  className?: string;
}

export interface AboutMe {
  aboutMeText: string;
  photosSrcs?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  logoSrc?: string;
}

export interface WorkExperienceSkillData {
  name: string;
  value: number;
  color: string;
}

export interface WorkExperienceSection {
  workExperience: WorkExperience;
  skillsData: WorkExperienceSkillData[];
}

type allowedTags = "react" | "tailwind";

export interface Project {
  imgSrc?: string;
  title: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags?: allowedTags[];
}

export interface IntersectionObserverOptions {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
}
