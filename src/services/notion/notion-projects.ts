import { notionProjectRequest } from "@/request";
import { INotionPropertiesService } from "@/types";
import { tagsSeparator } from "@/utils";

export const notionProjectService = async () => {
  console.log("service is run...");
  const projects = await notionProjectRequest();
  console.log(projects);

  return projects.map(
    (itemProjects): INotionPropertiesService => ({
      tags: tagsSeparator(itemProjects.tags),
      description: itemProjects.description,
      link_code: itemProjects.link_code,
      site: itemProjects.site,
      title: itemProjects.title,
      point: itemProjects.point,
    })
  );
};
