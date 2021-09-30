import React from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';
import AboutParagraph from './AboutParagraph';
import Photo from './Photo';

const About = () => {
  return (
    <Section id="about" className="min-h-screen py-10 sm:mx-10">
      <h2 className="section-heading after-h-line">About Me</h2>
      <div className="block grid-cols-2 gap-12 md:grid">
        <AboutParagraph />
        <Photo />
      </div>
    </Section>
  );
};

export default About;
