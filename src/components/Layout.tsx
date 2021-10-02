import React from 'react';
import SideMail from './Socials/SideMail';
import VerticalSocials from './Socials/VerticalSocials';

const Layout = ({ children }) => {
  return (
    <div id="root">
      <div className="flex flex-col min-h-screen">
        <VerticalSocials />
        <div id="content">
          <main className="px-6 mx-auto lg:px-36 md:px-24 sm:px-12">
            {children}
          </main>
        </div>
        <SideMail />
      </div>
    </div>
  );
};

export default Layout;
