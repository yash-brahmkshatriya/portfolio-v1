export type NavLink = {
  label: string;
  sectionId: string;
};

export type NavLinksProps = {
  closeMenu: () => void;
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    sectionId: 'about',
  },
  {
    label: 'Experience',
    sectionId: 'experience',
  },
  {
    label: 'Projects',
    sectionId: 'projects',
  },
  {
    label: 'Contact Me',
    sectionId: 'contact',
  },
];

export const NAV_HEIGHT = '70px';

export function isPageScrolledDown(): boolean {
  return window.scrollY > 0;
}

export function toggleHeaderShadow(): void {
  const navHeader = document.querySelector('#header-nav');
  if (!navHeader) return;
  if (isPageScrolledDown()) {
    navHeader.classList.add('shadow-lg');
  } else {
    navHeader.classList.remove('shadow-lg');
  }
}

export function maintainScrollBehaviour(onSmUpCallback?: () => void): void {
  if (window.innerWidth > 640) {
    document.body.classList.remove('overflow-hidden');
    if (onSmUpCallback) onSmUpCallback();
  }
}
