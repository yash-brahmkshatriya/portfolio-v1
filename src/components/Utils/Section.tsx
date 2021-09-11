import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
}

const Section = ({ className, children }: props) => {
  return <div className={`min-h-screen ${className}`}>{children}</div>;
};

export default Section;
