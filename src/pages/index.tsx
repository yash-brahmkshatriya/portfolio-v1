import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Intro from '../components/Intro/Intro';
import Layout from '../components/Layout';
import Projects from '../components/Projects/Projects';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
