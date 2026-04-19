import React from 'react';
import Section from '../Utils/Section';
import AboutParagraph from './AboutParagraph';
import Photo from './Photo';
import Animation from '../Animation/Animation';

const About = () => {
  return (
    <Section id="about" className="max-w-4xl min-h-screen py-20 mx-auto">
      <Animation.Fade direction="bottom">
        <h2 className="section-heading after-h-line">About Me</h2>
        <div className="block grid-cols-2 gap-12 md:grid">
          <AboutParagraph />
          <Photo />
        </div>
      </Animation.Fade>
    </Section>
  );
};

export default About;
