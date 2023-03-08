import { notionProjectService } from "@/services";
import { INotionPropertiesService } from "@/types";
import { proxy } from "valtio";

export const storeNotionProjects = proxy<{
  projects: INotionPropertiesService[];
}>({
  projects: [],
});

export const setProjects = async () => {
  const projectsService = await notionProjectService();
  storeNotionProjects.projects = projectsService;
};
