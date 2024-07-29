import React from 'react';
import {PacmanLoader } from 'react-spinners'

const useScreenLoader = (loading) => {
  const LoaderComponent = () => (
    <div className="loader-container">
      <PacmanLoader/>
    </div>
  );

  return [loading ? <LoaderComponent /> : null];
};

export default useScreenLoader;
