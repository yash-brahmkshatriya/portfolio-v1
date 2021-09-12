import React from 'react';
import About from '../components/About/About';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Intro />
      <About />
    </Layout>
  );
};

export default IndexPage;
