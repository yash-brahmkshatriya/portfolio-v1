import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../Utils/Section';
import Featured from './Featured';
import { projectType } from './project';
import OtherProject from './OtherProject';
import Fade from 'react-reveal/Fade';

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
  const projectsData: Array<projectType> = data.allMarkdownRemark.nodes;
  const featured: Array<projectType> = projectsData.filter(
    (pr) => pr.frontmatter.featured
  );
  const projects: Array<projectType> = projectsData.filter(
    (pr) => pr.frontmatter.showInProjects
  );
  return (
    <Section id="projects" className="max-w-4xl min-h-screen py-20 mx-auto">
      <Fade bottom>
        <h2 className="section-heading after-h-line">Things I've built</h2>
      </Fade>
      <ul className="mb-10">
        {featured &&
          featured.map((pr, idx) => <Featured project={pr} idx={idx} />)}
      </ul>
      <Fade bottom>
        <h3 className="mb-12 text-xl font-medium text-center text-gray-200 mt-28 sm:text-3xl">
          Other Noteworthy Projects
        </h3>
      </Fade>
      <ul className="grid grid-cols-2 gap-5">
        {projects &&
          projects.map((pr, idx) => <OtherProject project={pr} idx={idx} />)}
      </ul>
    </Section>
  );
};

export default Projects;
