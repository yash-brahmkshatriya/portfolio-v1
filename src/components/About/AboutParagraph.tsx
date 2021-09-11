import React from 'react';

const AboutParagraph = () => {
  return (
    <div className="max-w-sm text-justify font-body">
      <p className="mb-4">
        Hi, I'm Yash! I'm currently studying{' '}
        <span className="text-secondary">
          Computer Science &amp; Engineering{' '}
        </span>
        at Institute of Technology, Nirma University.
      </p>
      <p className="mb-4">
        I have experience working at{' '}
        <span className="text-secondary">Deutsche Bank </span>
        as Technical Analyst Intern.
      </p>
      <p className="mb-4">
        I love solving problems on various competitive coding platforms like
        <span className="text-secondary"> Codeforces </span> and
        <span className="text-secondary"> Hackerearth. </span>I enjoy teaching
        juniors the fundamentals of Data Structures and Algorithms.
      </p>
    </div>
  );
};

export default AboutParagraph;
