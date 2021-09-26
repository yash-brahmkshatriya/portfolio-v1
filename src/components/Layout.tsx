import React from 'react';
import SideMail from './Socials/SideMail';
import VerticalSocials from './Socials/VerticalSocials';

const Layout = ({ children }) => {
  return (
    <div id="root">
      <main className="flex flex-col min-h-screen md:px-0 lg:px-20">
        <VerticalSocials />
        <div id="content">{children}</div>
        <SideMail />
      </main>
    </div>
  );
};

export default Layout;
