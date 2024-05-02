import React from 'react';
import headerImage from './office.png'; 


function Header() {
  const imageWidth = 1290; 
  const imageHeight = 590;

  return (
    <header className="header">
      <div className="header-content">
        { }
      </div>
      <img
        src={headerImage}
        alt="Your website header image"
        className="header-image"
        width={imageWidth}
        height={imageHeight}
      />
    </header>
  );
}

export default Header;
