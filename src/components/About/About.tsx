import React from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';
import AboutParagraph from './AboutParagraph';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl lg:text-5xl font-display text-primary">
            About Me
          </h1>
          <div className="flex flex-col-reverse items-center justify-between gap-20 md:flex-row">
            <AboutParagraph />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
