import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="dumbbell left">
        <div className="weight"></div>
        <div className="handle"></div>
        <div className="weight"></div>
      </div>
      <div className="dumbbell right">
        <div className="weight"></div>
        <div className="handle"></div>
        <div className="weight"></div>
      </div>
    </div>
  );
};

export default Loader;
