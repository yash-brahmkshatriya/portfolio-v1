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
      className="relative grid mb-10 rounded shadow-lg"
    >
      <div
        className="z-10 px-6 pt-6 pb-5 group"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        <div className="relative flex flex-col items-start justify-between h-full">
          <span>
            <div className="mb-2 md:mb-3">
              <h3 className="text-lg font-bold transition duration-150 ease-linear sm:text-xl md:text-2xl group-hover:text-secondary">
                {title}
              </h3>
              {company && (
                <h4 className="text-gray-300 md:text-lg">{`At, ${company}`}</h4>
              )}
            </div>
            <div
              className="py-5 text-sm text-justify text-gray-300 sm:text-base"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
          </span>
          <footer>
            <ul className="my-3 tech-list">
              {tech &&
                tech.map((th, thid) => (
                  <li className="tech-list-item" key={`tech-${idx}-${thid}`}>
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
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="project-link"
                  target="_blank"
                  rel="noopener"
                >
                  <ExternalLink />
                </a>
              )}
            </div>
          </footer>
        </div>
      </div>
      <div
        className="relative opacity-20"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        <GatsbyImage
          image={cover}
          alt={title}
          className="h-full sm:w-full bg-secondary-slate"
          imgClassName="object-cover w-auto sm:h-auto filter grayscale contrast-100 brightness-50 mix-blend-multiply"
        />
      </div>
    </li>
  );
};

export default Featured;
