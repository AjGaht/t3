import React from 'react';
import CrispChat from './crispChat';

const CrispProvider = ({ children }) => {
  return (
    <>
      <CrispChat /> {/* Render the Crisp chat component */}
      {children}
    </>
  );
};

export default CrispProvider;