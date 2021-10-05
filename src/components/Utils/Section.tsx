import React from 'react';

type SectionProps = React.HTMLProps<HTMLDivElement>;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, id, style, children, ...rest }, ref) => (
    <section
      className={`${className} container`}
      id={id}
      style={style}
      ref={ref}
      {...rest}
    >
      {children}
    </section>
  )
);
export default Section;
