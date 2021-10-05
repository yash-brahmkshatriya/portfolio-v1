import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { Menu, X } from 'react-feather';
import Fade from 'react-reveal/Fade';

const NavLinks = () => (
  <ul className="flex flex-col items-center list-none font-heading sm:flex-row">
    <Fade top delay={100}>
      <li className="nav-link">
        <Link to="/#about">About</Link>
      </li>
    </Fade>
    <Fade top delay={200}>
      <li className="nav-link">
        <Link to="/#experience">Experience</Link>
      </li>
    </Fade>
    <Fade top delay={300}>
      <li className="nav-link">
        <Link to="/#projects">Projects</Link>
      </li>
    </Fade>
    <Fade top delay={400}>
      <li className="nav-link">
        <Link to="/#contact">Contact Me</Link>
      </li>
    </Fade>
    <Fade top delay={500}>
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
    </Fade>
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

  const toggleNavMenu = (open: boolean) => {
    const menu = document.querySelector('.nav-menu');
    const classes = ['flex', 'flex-col', 'justify-center', 'items-center'];
    if (open) {
      menu.classList.remove('hidden');
      classes.forEach((fc) => menu.classList.add(fc));
      document.querySelector('body').classList.add('overflow-hidden');
    } else {
      menu.classList.add('hidden');
      classes.forEach((fc) => menu.classList.remove(fc));
      document.querySelector('body').classList.remove('overflow-hidden');
    }
  };

  return (
    <header
      className="fixed top-0 z-20 w-full px-8 md:px-12 bg-opacity-90 bg-dark backdrop-filter backdrop-blur-lg filter-none"
      style={{ height: '70px' }}
      id="header-nav"
    >
      <div className="nav-links">
        <Fade top>
          <StaticImage src="../../images/logo.png" alt="Logo" width={50} />
        </Fade>
        <nav className="relative">
          <span className="hidden sm:block">
            <NavLinks />
          </span>
          <Fade top delay={100}>
            <button
              className="block sm:hidden"
              onClick={() => toggleNavMenu(true)}
            >
              <Menu className="text-secondary" />
            </button>
          </Fade>
          <span
            className="fixed inset-0 z-30 hidden min-h-screen py-12 bg-opacity-100 sm:hidden bg-dark nav-menu"
            style={{ width: '100vw' }}
          >
            <NavLinks />
            <Fade top delay={600}>
              <X className="mt-5" onClick={() => toggleNavMenu(false)} />
            </Fade>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
