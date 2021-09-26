import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const Section = ({ className = '', children, id }: props) => {
  return (
    <section className={`${className} container mx-auto md:px-7 px-5`} id={id}>
      {children}
    </section>
  );
};

export default Section;
