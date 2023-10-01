import { graphql, useStaticQuery } from 'gatsby';
import { MarkDownQueryData } from '../types';
import { ProjectData } from '../components/Projects/types';

export const useStaticProjectsData = (): MarkDownQueryData<ProjectData> => {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            external
            featured
            repo
            showInProjects
            tech
            title
            company
            repoPrivate
            coverImg {
              childImageSharp {
                gatsbyImageData(width: 700, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
          html
        }
      }
    }
  `);
};
