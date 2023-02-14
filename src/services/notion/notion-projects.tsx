import { apiNotion } from '@/request';
import { INotionService } from '@/types';
import { tagsSeparator } from '@/utils';

export const notionProjectService = async () => {
  const listOfProjects = await apiNotion();

  return listOfProjects.map(
    (itemProjects): INotionService => ({
      tags: tagsSeparator(itemProjects.tags),
      description: itemProjects.description,
      link_code: itemProjects.link_code,
      site: itemProjects.site,
      title: itemProjects.title,
    })
  );
};
