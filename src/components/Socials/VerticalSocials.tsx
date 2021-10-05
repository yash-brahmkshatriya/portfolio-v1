import React from 'react';
import Socials from './Socials';
import Bounce from 'react-reveal/Bounce';

const VerticalSocials = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden w-20 lg:block">
      <Bounce bottom delay={1500}>
        <Socials />
      </Bounce>
    </div>
  );
};

export default VerticalSocials;
