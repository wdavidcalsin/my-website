import { apiNotion } from '@/request';

export const notionProjects = () => {
  const listOfProjects = apiNotion();

  return listOfProjects;
};
