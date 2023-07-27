export type Courses = Array<{
  title: string;
  duration: string;
  description: string;
  skills: string[];
}>;
export type currPage = {
  folder: string;
  file: string;
};

export type Skill = {
  title: string;
  items: Array<{ title: string; icon: string }>;
};
