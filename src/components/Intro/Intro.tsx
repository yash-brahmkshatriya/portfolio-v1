import React from 'react';
import Section from '../Utils/Section';
import Salutation from './Salutation';
import Fade from 'react-reveal/Fade';

const Intro = () => {
  return (
    <Section
      id="intro"
      className="grid items-center min-h-screen mx-auto text-center"
    >
      <Fade delay={1000}>
        <Salutation />
      </Fade>
    </Section>
  );
};

export default Intro;
