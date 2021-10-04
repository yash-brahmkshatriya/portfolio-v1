import React from 'react';
import Section from '../Utils/Section';
import AboutParagraph from './AboutParagraph';
import Photo from './Photo';

const About = () => {
  return (
    <Section id="about" className="max-w-4xl min-h-screen py-20 mx-auto">
      <h2 className="section-heading after-h-line">About Me</h2>
      <div className="block grid-cols-2 gap-12 md:grid">
        <AboutParagraph />
        <Photo />
      </div>
    </Section>
  );
};

export default About;
