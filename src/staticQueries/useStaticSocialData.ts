import { graphql, useStaticQuery } from 'gatsby';
import { MarkDownQueryData, SocialData } from '../types';

export const useStaticSocialData = (): MarkDownQueryData<SocialData> => {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/socials/" } }) {
        nodes {
          frontmatter {
            email
            socials {
              name
              url
            }
          }
        }
      }
    }
  `);
};
