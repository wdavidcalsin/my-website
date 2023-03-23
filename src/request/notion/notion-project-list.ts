import { INotionPropertiesRequest, Properties } from "@/types";

export const notionProjectRequest = async () => {
  const { API_URL_SERVER } = process.env;
  const response = await fetch(`${API_URL_SERVER}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const projects = (await response.json()) as INotionPropertiesRequest[];

  return projects;
};
