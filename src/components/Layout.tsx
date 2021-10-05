import React from 'react';
import Footer from './Utils/Footer';
import SideMail from './Socials/SideMail';
import VerticalSocials from './Socials/VerticalSocials';
import Nav from './Utils/Nav';
import SEO from './Seo';

const Layout = ({ children }) => {
  return (
    <div id="root">
      <SEO />
      <div className="flex flex-col min-h-screen">
        <VerticalSocials />
        <Nav />
        <div id="content">
          <main className="px-6 mx-auto lg:px-36 md:px-24 sm:px-12">
            {children}
          </main>
          <Footer />
        </div>
        <SideMail />
      </div>
    </div>
  );
};

export default Layout;
