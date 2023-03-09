export interface RootObject {
  properties: Properties;
}

export interface Properties {
  description: Description;
  tags: Description;
  site: Site;
  link_code: Site;
  title: Title;
  point: Point;
}

export interface Title {
  id: string;
  type: string;
  title: Richtext[];
}
export interface Point {
  id: string;
  type: string;
  rich_text: Richtext2[];
}

export interface Site {
  id: string;
  type: string;
  rich_text: Richtext2[];
}

export interface Richtext2 {
  type: string;
  text: Text2;
  annotations: Annotations;
  plain_text: string;
  href: string;
}

export interface Text2 {
  content: string;
  link: Link;
}

export interface Link {
  url: string;
}

export interface Description {
  id: string;
  type: string;
  rich_text: Richtext[];
}

export interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Createdby {
  object: string;
  id: string;
}
