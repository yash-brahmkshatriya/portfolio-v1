import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
  center?: boolean;
}

const Container = ({ children, className, center }: props) => {
  let classes = `max-w-screen-2xl mx-auto ${className} min-h-screen`;
  if (center) {
    classes = `${classes} flex items-center justify-center`;
  }
  return <div className={classes}>{children}</div>;
};

export default Container;
