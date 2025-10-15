export interface SectionProps {
  ref?: React.RefObject<HTMLElement | null>;
  sectionName: string;
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
