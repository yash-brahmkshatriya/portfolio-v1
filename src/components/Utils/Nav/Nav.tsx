import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Menu, X } from 'react-feather';
import Fade from 'react-reveal/Fade';
import {
  maintainScrollBehaviour,
  toggleHeaderShadow,
  NAV_HEIGHT,
  NAV_LINKS,
  NavLinksProps,
} from './navUtils';

const NavLinks = ({ closeMenu }: NavLinksProps) => (
  <ul className="flex flex-col items-center list-none font-heading sm:flex-row">
    {NAV_LINKS.map((nv, index) => (
      <Fade top delay={(index + 1) * 100}>
        <li className="nav-link">
          <Link to={`/#${nv.sectionId}`} onClick={closeMenu}>
            {nv.label}
          </Link>
        </li>
      </Fade>
    ))}
    <Fade top delay={500}>
      <li className="nav-link">
        <a
          className="btn btn-small btn-secondary-outline"
          target="_blank"
          href="https://drive.google.com/file/d/17hEnVT-iZokJHKXcH-CHlw1ixO3727fc/view?usp=sharing"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </Fade>
  </ul>
);

const Nav = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  const closeMenu = useCallback(
    () => setIsNavMenuOpen(false),
    [setIsNavMenuOpen]
  );
  const openMenu = useCallback(
    () => setIsNavMenuOpen(true),
    [setIsNavMenuOpen]
  );

  useEffect(() => {
    const OVERFLOW_HIDDEN_CN = 'overflow-hidden';
    if (isNavMenuOpen) {
      document.body.classList.add(OVERFLOW_HIDDEN_CN);
    } else {
      document.body.classList.remove(OVERFLOW_HIDDEN_CN);
    }
    return () => {
      document.body.classList.remove(OVERFLOW_HIDDEN_CN);
    };
  }, [isNavMenuOpen]);

  useEffect(() => {
    function onWindowResize() {
      maintainScrollBehaviour(() => {
        setIsNavMenuOpen(false);
      });
    }
    document.addEventListener('scroll', toggleHeaderShadow);
    window.addEventListener('resize', onWindowResize);
    return () => {
      document.removeEventListener('scroll', toggleHeaderShadow);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <>
      <header
        className="fixed top-0 z-20 w-full px-8 md:px-12 bg-opacity-80 bg-dark backdrop-filter backdrop-blur filter-none"
        style={{ height: NAV_HEIGHT }}
        id="header-nav"
      >
        <div className="nav-links">
          <Fade top>
            <Link to="/" onClick={closeMenu}>
              <StaticImage
                src="../../../images//logo.png"
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
                className={`text-secondary sm:hidden ${
                  isNavMenuOpen ? 'hidden' : ''
                }`}
                onClick={openMenu}
              />
              <X
                className={`${
                  !isNavMenuOpen ? 'hidden' : ''
                } text-secondary sm:hidden`}
                onClick={closeMenu}
              />
            </Fade>
          </nav>
        </div>
      </header>
      <span
        className={`fixed inset-0 z-30 h-full bg-opacity-80 sm:hidden bg-dark nav-menu backdrop-filter backdrop-blur filter-none ${
          isNavMenuOpen ? 'flex flex-col justify-center items-center' : 'hidden'
        }`}
        style={{
          width: '100vw',
          transform: `translate(0,${NAV_HEIGHT})`,
          height: `calc(100vh - ${NAV_HEIGHT})`,
        }}
      >
        <NavLinks closeMenu={closeMenu} />
      </span>
    </>
  );
};

export default Nav;
