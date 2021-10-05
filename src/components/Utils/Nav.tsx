import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { Menu, X } from 'react-feather';

const NavLinks = () => (
  <ul className="flex flex-col items-center list-none font-heading sm:flex-row">
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
        <StaticImage src="../../images/logo.png" alt="Logo" width={50} />
        <nav className="relative">
          <span className="hidden sm:block">
            <NavLinks />
          </span>
          <button
            className="block sm:hidden"
            onClick={() => toggleNavMenu(true)}
          >
            <Menu className="text-secondary" />
          </button>
          <span
            className="fixed inset-0 z-30 hidden min-h-screen py-12 sm:hidden bg-dark nav-menu bg-opacity-90"
            style={{ width: '100vw' }}
          >
            <NavLinks />
            <X className="mt-5" onClick={() => toggleNavMenu(false)} />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
