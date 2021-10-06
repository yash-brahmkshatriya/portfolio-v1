import React, { useEffect, useState } from 'react';
import Socials from '../Socials/Socials';
import { Star, GitBranch } from 'react-feather';

const Footer = () => {
  const [repoInfo, setRepoInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/repos/yash-brahmkshatriya/portfolio-v1`)
      .then((httpResponse) => httpResponse.json())
      .then((data) => {
        setRepoInfo({ forks: data.forks_count, stars: data.stargazers_count });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer
      className="flex flex-col items-center justify-center h-auto p-4 text-center"
      style={{ minHeight: '70px' }}
    >
      <div className="mb-3 lg:hidden lg:mb-0">
        <Socials />
      </div>
      <a
        href="https://github.com/yash-brahmkshatriya/portfolio-v1"
        target="_blank"
        className="p-2 group footer-credits hover:footer-credits-glow"
        rel="nooopener noreferrer"
      >
        <p className="text-sm lg:text-base">
          Made with ❤ by Yash Brahmkshatriya
        </p>
        {repoInfo.forks !== null && repoInfo.stars !== null && (
          <div className="my-2 text-sm">
            <span className="inline-flex items-center mx-2">
              <Star size={15} />
              <span className="inline-flex items-center ml-1">
                {repoInfo.stars}
              </span>
            </span>
            <span className="inline-flex items-center mx-2">
              <GitBranch size={15} />
              <span className="inline-flex items-center ml-1">
                {repoInfo.forks}
              </span>
            </span>
          </div>
        )}
      </a>
    </footer>
  );
};

export default Footer;
