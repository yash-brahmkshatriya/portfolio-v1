import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ExternalLink, GitHub } from 'react-feather';
import { projectType } from './project';

interface props {
  project: projectType;
  idx: number;
}

const Featured = ({ project, idx }: props) => {
  const { title, external, company, repo, coverImg, tech } =
    project.frontmatter;
  const cover = coverImg === null ? null : getImage(coverImg);

  return (
    <li
      key={`featured-project-${idx}`}
      className="relative grid max-w-2xl mb-10 rounded shadow md:shadow-lg"
    >
      <div
        className="z-10 px-6 pt-6 pb-5"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        <div className="relative h-full">
          <div className="mb-2 md:mb-3">
            <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
              {title}
            </h3>
            {company && (
              <h4 className="font-mono sm:text-lg md:text-xl text-secondary">{`@${company}`}</h4>
            )}
          </div>
          <div
            className="py-5 text-sm text-justify text-gray-300 sm:text-base"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
          <ul className="my-3 tech-list">
            {tech &&
              tech.map((th, thid) => (
                <li className="tech-list-item" key={`tech-${idx}=${thid}`}>
                  {th}
                </li>
              ))}
          </ul>
          <div className="project-links">
            {repo && (
              <a
                href={repo}
                aria-label="Repository Link"
                className="project-link"
              >
                <GitHub />
              </a>
            )}
            {external && (
              <a
                href={external}
                aria-label="External Link"
                className="project-link"
              >
                <ExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        className="relative opacity-20"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        <GatsbyImage
          image={cover}
          alt={title}
          className="h-full bg-secondary-slate"
          imgClassName="object-cover w-auto filter grayscale contrast-100 brightness-50 mix-blend-multiply"
        />
      </div>
    </li>
  );
};

export default Featured;
