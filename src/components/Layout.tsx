import React from 'react';
import SideMail from './Socials/SideMail';
import VerticalSocials from './Socials/VerticalSocials';

const Layout = ({ children }) => {
  return (
    <div id="root">
      <main className="flex flex-col max-w-screen-xl min-h-screen px-6 mx-auto lg:px-36 md:px-24 sm:px-12">
        <VerticalSocials />
        <div id="content">{children}</div>
        <SideMail />
      </main>
    </div>
  );
};

export default Layout;
