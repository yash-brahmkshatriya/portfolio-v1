import React from 'react';
import Section from '../Utils/Section';
import Salutation from './Salutation';

const Intro = () => {
  return (
    <Section
      id="intro"
      className="grid items-center min-h-screen mx-auto text-center"
    >
      <Salutation />
    </Section>
  );
};

export default Intro;
