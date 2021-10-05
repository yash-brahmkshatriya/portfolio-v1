import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

const Section = ({ className = '', children, id, style, ref }: props) => {
  return (
    <section
      className={`${className} container`}
      id={id}
      style={style}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
