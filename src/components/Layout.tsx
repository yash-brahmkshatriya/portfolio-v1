import React from 'react';
import SideMail from './Socials/SideMail';
import VerticalSocials from './Socials/VerticalSocials';

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen text-white bg-dark md:px-0 lg:px-20">
      <VerticalSocials />
      {children}
      <SideMail />
    </main>
  );
};

export default Layout;
