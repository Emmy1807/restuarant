import React from 'react';
import './AppBtn.css';

const AppBtn = ({ name }) => {
  const handleScrollTo = (section) => {
    // Your scroll logic here
  };

  return (
    <a
      className="app-btn scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo('book-a-table')}
    >
      {name}
    </a>
  );
};

export default AppBtn
