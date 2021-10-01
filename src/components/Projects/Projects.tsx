import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../Utils/Section';

interface projectType {
  frontmatter: {
    title: string;
    repo?: string;
    external?: string;
    tech?: Array<string>;
    featured: boolean;
    showInProjects: boolean;
  };
  html: string;
}

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
    <Section id="projects" className="min-h-screen py-20">
      <h2 className="section-heading after-h-line">Things I've built</h2>
    </Section>
  );
};

export default Projects;
