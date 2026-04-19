import React from 'react';
import Section from '../Utils/Section';
import Salutation from './Salutation';
import Animation from '../Animation/Animation';

const Intro = () => {
  return (
    <Section
      id="intro"
      className="grid items-center min-h-screen mx-auto text-center"
    >
      <Animation.Fade delay={1}>
        <Salutation />
      </Animation.Fade>
    </Section>
  );
};

export default Intro;
