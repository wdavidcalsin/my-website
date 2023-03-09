export interface INotionPropertiesRequest {
  description: string;
  tags: string;
  site: string;
  link_code: string;
  title: string;
  point: string;
}

export interface INotionPropertiesService {
  description: string;
  tags: string[];
  site: string;
  link_code: string;
  title: string;
  point: string;
}
