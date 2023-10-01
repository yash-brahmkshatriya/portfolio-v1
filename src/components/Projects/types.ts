import { ImageDataLike } from 'gatsby-plugin-image';

export type ProjectData = {
  title: string;
  company?: string;
  repo?: string;
  repoPrivate?: boolean;
  external?: string;
  tech?: string[];
  featured: boolean;
  showInProjects: boolean;
  coverImg?: ImageDataLike;
};
