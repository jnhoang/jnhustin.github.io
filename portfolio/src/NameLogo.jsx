import React from 'react';
import './index.css'
const NameLogo = () => {
  return (
    <div>
      <div className="background absolute">
        <h1 className="text-center name font1">Justin Hoang</h1>
      </div>
      <div className="background bottom-layer background-black absolute">
        <h1 className="text-center name shadow">Justin Hoang</h1>
      </div>
    </div>
  );
}


export default NameLogo;