import React, { useMemo } from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../Utils/Section';
import Featured from './Featured';
import { ProjectData } from './types';
import OtherProject from './OtherProject';
import { MarkDownQueryData, MarkDownQueryNode } from '../../types';
import { useStaticProjectsData } from '../../staticQueries/useStaticProjectsData';

const Projects = () => {
  const data: MarkDownQueryData<ProjectData> = useStaticProjectsData();
  const projectsData: MarkDownQueryNode<ProjectData>[] =
    data.allMarkdownRemark.nodes;

  const featuredProjects = useMemo(() => {
    return projectsData.filter((p) => p.frontmatter.featured);
  }, [projectsData]);

  const noteworthyProjects = useMemo(() => {
    return projectsData.filter((pr) => pr.frontmatter.showInProjects);
  }, [projectsData]);

  return (
    <Section id="projects" className="max-w-4xl min-h-screen py-20 mx-auto">
      <Fade bottom>
        <h2 className="section-heading after-h-line">Things I've built</h2>
      </Fade>
      <ul className="mb-10">
        {featuredProjects.map((pr, idx) => (
          <Featured key={`featured-project-${idx}`} project={pr} idx={idx} />
        ))}
      </ul>
      <Fade bottom>
        <h3 className="mb-12 text-xl font-medium text-center text-gray-200 mt-28 sm:text-3xl">
          Other Noteworthy Projects
        </h3>
      </Fade>
      <ul className="grid grid-cols-2 gap-5">
        {noteworthyProjects.map((pr, idx) => (
          <OtherProject
            key={`noteworthy-project-${idx}`}
            project={pr}
            idx={idx}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
