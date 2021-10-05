import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';

const NavLinks = () => (
  <ul className="flex flex-col items-center list-none md:flex-row">
    <li className="nav-link">
      <Link to="/#about">About</Link>
    </li>
    <li className="nav-link">
      <Link to="/#experience">Experience</Link>
    </li>
    <li className="nav-link">
      <Link to="/#projects">Projects</Link>
    </li>
    <li className="nav-link">
      <Link to="/#contact">Contact Me</Link>
    </li>
    <li className="nav-link">
      <a
        className="btn btn-small btn-secondary-outline"
        target="_blank"
        href="/resume.pdf"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </li>
  </ul>
);

const Nav = () => {
  useEffect(() => {
    const navHeader = document.querySelector('#header-nav');
    function isScrolledDown(): boolean {
      return window.scrollY > 0;
    }
    function toggleClassList(): void {
      if (isScrolledDown()) {
        navHeader.classList.add('shadow-lg');
      } else {
        navHeader.classList.remove('shadow-lg');
      }
    }
    document.addEventListener('scroll', toggleClassList);
    return () => {
      document.removeEventListener('scroll', toggleClassList);
    };
  }, []);
  return (
    <header
      className="fixed top-0 z-20 w-full px-12 bg-opacity-90 bg-dark backdrop-filter backdrop-blur-lg"
      style={{ height: '70px' }}
      id="header-nav"
    >
      <div className="nav-links">
        <StaticImage src="../../images/logo.png" alt="Logo" width={50} />
        <nav className="relative">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
