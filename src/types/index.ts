export type BtnVariant = "primary" | "secondary" | "ghost";
export type BtnSize = "sm" | "md" | "lg";

export interface Project {
  id: string;
  code: string;
  status: "DEPLOYED" | "ACTIVE" | "BETA";
  type: string;
  stack: string[];
  desc: string;
  longDesc: string;
}

export interface Tech {
  n: string;
  logo: any;
  s: string;
  learning?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  count: string;
  coming?: boolean;
  techs: Tech[];
}

export interface FormState {
  name: string;
  email: string;
  msg: string;
}
