import { INotionRequestProjects, INotionRequestTechnologies } from '@/types';

const NOTION_URL_API_LIST_PROJECT =
  'https://my-website-server-topaz.vercel.app/api/';
const NOTION_URL_API_TECHNOLOGIES =
  'https://my-website-server-topaz.vercel.app/api/technologies/';

export const apiNotionListProject = async (): Promise<
  INotionRequestProjects[]
> => {
  const resApi = await fetch(NOTION_URL_API_LIST_PROJECT);

  if (!resApi) {
    console.log('Notion api not found');
  }

  const listProjects = await resApi.json();

  return listProjects;
};

export const apiNotionTechnologies = async (): Promise<
  INotionRequestTechnologies[]
> => {
  const resApi = await fetch(NOTION_URL_API_TECHNOLOGIES);

  if (!resApi) {
    console.log('Notion api not found');
  }

  const listTechnologies = await resApi.json();

  return listTechnologies;
};
