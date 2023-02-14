const NOTION_URL_API = 'https://my-website-server-topaz.vercel.app/api';

export const apiNotion = async () => {
  const resApi = await fetch(NOTION_URL_API);

  const listProjects = await resApi.json();

  return JSON.parse(listProjects);
};
