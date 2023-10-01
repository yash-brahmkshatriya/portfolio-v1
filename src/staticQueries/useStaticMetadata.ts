import { graphql, useStaticQuery } from 'gatsby';

export const useStaticMetadata = () => {
  return useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          title
          titleTemplate
          description
          image
        }
      }
    }
  `);
};
