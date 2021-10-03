import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../Utils/Section';
import Featured from './Featured';
import { projectType } from './project';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { order: DESC, fields: frontmatter___date }
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
  const projectsData: Array<projectType> = data.allMarkdownRemark.nodes;
  const featured: Array<projectType> = projectsData.filter(
    (pr) => pr.frontmatter.featured
  );
  const projects: Array<projectType> = projectsData.filter(
    (pr) => !pr.frontmatter.featured
  );
  return (
    <Section id="projects" className="max-w-4xl min-h-screen py-20 mx-auto">
      <h2 className="section-heading after-h-line">Things I've built</h2>
      <ul>
        {featured &&
          featured.map((pr, idx) => <Featured project={pr} idx={idx} />)}
      </ul>
    </Section>
  );
};

export default Projects;
