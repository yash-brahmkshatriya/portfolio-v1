import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const Section = ({ className = '', children, id, style }: props) => {
  return (
    <section className={`${className} container`} id={id} style={style}>
      {children}
    </section>
  );
};

export default Section;
