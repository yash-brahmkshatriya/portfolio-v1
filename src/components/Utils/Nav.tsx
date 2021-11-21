import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import { Menu, X } from 'react-feather';
import Fade from 'react-reveal/Fade';

const NavLinks = ({ closeMenu }) => (
  <ul className="flex flex-col items-center list-none font-heading sm:flex-row">
    <Fade top delay={100}>
      <li className="nav-link">
        <Link to="/#about" onClick={closeMenu}>
          About
        </Link>
      </li>
    </Fade>
    <Fade top delay={200}>
      <li className="nav-link">
        <Link to="/#experience" onClick={closeMenu}>
          Experience
        </Link>
      </li>
    </Fade>
    <Fade top delay={300}>
      <li className="nav-link">
        <Link to="/#projects" onClick={closeMenu}>
          Projects
        </Link>
      </li>
    </Fade>
    <Fade top delay={400}>
      <li className="nav-link">
        <Link to="/#contact" onClick={closeMenu}>
          Contact Me
        </Link>
      </li>
    </Fade>
    <Fade top delay={500}>
      <li className="nav-link">
        <a
          className="btn btn-small btn-secondary-outline"
          target="_blank"
          href="https://drive.google.com/file/d/1088QVMJmaVXYz9dSzf27RzhxReDJzLIN/view"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </Fade>
  </ul>
);

const Nav = () => {
  const navHeight = '70px';
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
    function maintainScrollBehaviour(e): void {
      if (window.innerWidth > 640) {
        document.body.classList.remove('overflow-hidden');
      }
    }
    document.addEventListener('scroll', toggleClassList);
    window.addEventListener('resize', maintainScrollBehaviour);
    return () => {
      document.removeEventListener('scroll', toggleClassList);
      window.removeEventListener('resize', maintainScrollBehaviour);
    };
  }, []);

  const toggleNavMenu = (open: boolean) => {
    const menu = document.querySelector('.nav-menu');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    if (!menu) return;
    const classes = ['flex', 'flex-col', 'justify-center', 'items-center'];
    if (open) {
      menu.classList.remove('hidden');
      classes.forEach((fc) => menu.classList.add(fc));
      document.body.classList.add('overflow-hidden');
      menuButton.classList.add('hidden');
      closeButton.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      classes.forEach((fc) => menu.classList.remove(fc));
      document.body.classList.remove('overflow-hidden');
      menuButton.classList.remove('hidden');
      closeButton.classList.add('hidden');
    }
  };

  const closeMenu = () => toggleNavMenu(false);
  const openMenu = () => toggleNavMenu(true);

  return (
    <>
      <header
        className="fixed top-0 z-20 w-full px-8 md:px-12 bg-opacity-80 bg-dark backdrop-filter backdrop-blur filter-none"
        style={{ height: navHeight }}
        id="header-nav"
      >
        <div className="nav-links">
          <Fade top>
            <Link to="/" onClick={closeMenu}>
              <StaticImage
                src="../../images/logo.png"
                alt="Logo"
                width={50}
                placeholder="none"
              />
            </Link>
          </Fade>
          <nav className="relative">
            <span className="hidden sm:block">
              <NavLinks closeMenu={closeMenu} />
            </span>
            <Fade top delay={100}>
              <Menu
                className="text-secondary sm:hidden menu-button"
                onClick={openMenu}
              />
              <X
                className="hidden text-secondary sm:hidden close-button"
                onClick={closeMenu}
              />
            </Fade>
          </nav>
        </div>
      </header>
      <span
        className="fixed inset-0 z-30 hidden h-full bg-opacity-80 sm:hidden bg-dark nav-menu backdrop-filter backdrop-blur filter-none"
        style={{
          width: '100vw',
          transform: `translate(0,${navHeight})`,
          height: `calc(100vh - ${navHeight})`,
        }}
      >
        <NavLinks closeMenu={closeMenu} />
      </span>
    </>
  );
};

export default Nav;
