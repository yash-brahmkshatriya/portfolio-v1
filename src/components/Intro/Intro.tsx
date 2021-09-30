import React from 'react';
import Container from '../Utils/Container';
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

{
  /* <div className="flex items-center justify-center text-center md:container md:mx-auto"> */
}
