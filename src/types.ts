export type MarkDownQueryData<U> = {
  allMarkdownRemark: {
    nodes: MarkDownQueryNode<U>[];
  };
};

export type MarkDownQueryNode<U> = {
  frontmatter: U;
  html?: string;
};

export type SocialMediaItem = {
  name: string;
  url: string;
};

export type SocialData = {
  email: string;
  socials: SocialMediaItem[];
};
