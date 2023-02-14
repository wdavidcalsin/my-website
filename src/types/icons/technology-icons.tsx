export interface ITechnologiesIcons {
  name?: string;
  color: string;
  slug: string;
  description?: string;
}

export interface IListTechnologiesIcons {
  css: ITechnologiesIcons;
  javascript: ITechnologiesIcons;
  react: ITechnologiesIcons;
  next: ITechnologiesIcons;
  typescript: ITechnologiesIcons;
  tailwind: ITechnologiesIcons;
  redux: ITechnologiesIcons;
  figma: ITechnologiesIcons;
  node: ITechnologiesIcons;
  express: ITechnologiesIcons;
  mongodb: ITechnologiesIcons;
  sql: ITechnologiesIcons;
  firebase: ITechnologiesIcons;
  git: ITechnologiesIcons;
  github: ITechnologiesIcons;
}

export interface IIconsPropsMakeStyles {
  color: string;
}
