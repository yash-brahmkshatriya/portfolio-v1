import React from 'react';
import About from '../components/About/About';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Intro />
      <About />
    </>
  );
};

export default IndexPage;
