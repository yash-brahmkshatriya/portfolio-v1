import React from 'react';
import Socials from './Socials';
import Animation from '../Animation/Animation';

const VerticalSocials = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden w-20 lg:block">
      <Animation.Bounce direction="bottom" delay={1.5}>
        <Socials />
      </Animation.Bounce>
    </div>
  );
};

export default VerticalSocials;
