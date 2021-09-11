import React from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';
import Salutation from './Salutation';

const Intro = () => {
  return (
    <Section className="bg-dark text-white">
      <Container>
        <div className="flex items-center justify-center text-center md:container md:mx-auto">
          <Salutation />
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
