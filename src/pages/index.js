import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <h1 className="text-red-600 font-display text-5xl">Hello </h1>
    </Layout>
  );
};

export default IndexPage;
