import { apiNotionListProject, apiNotionTechnologies } from '@/request';
import { INotionServiceProjects, INotionServiceTechnologies } from '@/types';
import { tagsSeparator } from '@/utils';

export const notionProjectService = async () => {
  const listOfProjects = await apiNotionListProject();

  return listOfProjects.map(
    (itemProjects): INotionServiceProjects => ({
      tags: tagsSeparator(itemProjects.tags),
      description: itemProjects.description,
      link_code: itemProjects.link_code,
      site: itemProjects.site,
      title: itemProjects.title,
    })
  );
};

export const notionTechnologiesService = async () => {
  const listOfTechnologies = await apiNotionTechnologies();

  return listOfTechnologies.map(
    (itemTechnologies): INotionServiceTechnologies => ({
      name: itemTechnologies.name,
      slug: itemTechnologies.slug,
      description: itemTechnologies.description,
    })
  );
};
