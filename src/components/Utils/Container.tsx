import React from 'react';

interface props {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ children, className }: props) => {
  return <div className={`max-w-5xl m-auto ${className}`}>{children}</div>;
};

export default Container;
