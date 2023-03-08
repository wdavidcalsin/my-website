import { INotionPropertiesRequest, Properties } from "@/types";

export const notionProjectRequest = async () => {
  const response = await fetch(`/api/notion`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const projects = (await response.json()) as INotionPropertiesRequest[];

  return projects;
};
