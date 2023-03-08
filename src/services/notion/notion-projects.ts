import { notionProjectRequest } from "@/request";
import { INotionPropertiesService } from "@/types";
import { tagsSeparator } from "@/utils";

export const notionProjectService = async () => {
  const projects = await notionProjectRequest();

  return projects.map(
    (itemProjects): INotionPropertiesService => ({
      tags: tagsSeparator(itemProjects.tags),
      description: itemProjects.description,
      link_code: itemProjects.link_code,
      site: itemProjects.site,
      title: itemProjects.title,
    })
  );
};
