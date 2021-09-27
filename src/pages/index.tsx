import React from 'react';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Intro />
      <About />
      <Experience />
    </Layout>
  );
};

export default IndexPage;
