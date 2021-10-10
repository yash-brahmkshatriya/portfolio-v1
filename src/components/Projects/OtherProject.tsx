import React from 'react';
import { ExternalLink, Folder, GitHub } from 'react-feather';
import { projectType } from './project';
import Fade from 'react-reveal/Fade';

interface props {
  project: projectType;
  idx: number;
}

const OtherProject = ({ project, idx }: props) => {
  const { repo, title, external, tech, repoPrivate } = project.frontmatter;
  return (
    <li
      key={`other-project-${idx}`}
      className="w-full h-full col-span-2 sm:col-span-1"
    >
      <Fade bottom>
        <div className="flex flex-col items-start justify-between h-full p-5 transition duration-150 ease-linear transform rounded shadow-lg cursor-pointer group bg-dark-light hover:-translate-y-1">
          <header className="w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <Folder size={40} className="text-secondary" />
              <div className="project-links">
                {repo && !repoPrivate && (
                  <a
                    href={repo}
                    aria-label="Repository Link"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub size={20} />
                  </a>
                )}
                {external && (
                  <a
                    href={external}
                    aria-label="External Link"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="font-medium transition duration-150 ease-in sm:text-lg md:text-xl group-hover:text-secondary">
              {title}
            </h3>
            <div
              className="py-5 text-sm text-justify text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          </header>
          <footer className="mt-4">
            <ul className="my-3 tech-list">
              {tech &&
                tech.map((th, thid) => (
                  <li className="tech-list-item" key={`tech-${idx}-${thid}`}>
                    {th}
                  </li>
                ))}
            </ul>
          </footer>
        </div>
      </Fade>
    </li>
  );
};

export default OtherProject;
