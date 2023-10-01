import { graphql, useStaticQuery } from 'gatsby';
import { MarkDownQueryData } from '../types';
import { ExperienceData } from '../components/Experience/types';

export const useStaticExperienceData =
  (): MarkDownQueryData<ExperienceData> => {
    return useStaticQuery(
      graphql`
        query {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { fileAbsolutePath: { regex: "/experience/" } }
          ) {
            nodes {
              frontmatter {
                company
                location
                range
                title
              }
              html
            }
          }
        }
      `
    );
  };
