import { ImageDataLike } from 'gatsby-plugin-image';

export interface projectType {
  frontmatter: {
    title: string;
    company?: string;
    repo?: string;
    repoPrivate?: boolean;
    external?: string;
    tech?: Array<string>;
    featured: boolean;
    showInProjects: boolean;
    coverImg?: ImageDataLike;
  };
  html: string;
}
