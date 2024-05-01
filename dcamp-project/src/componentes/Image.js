import React from 'react';
import './Image.css';

function ImageComponent() {
  const imageUrl = 'path/to/your/image.jpg'; // Image URL

  return (
    <div className="image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Content to be displayed over the image (optional) */}
    </div>
  );
}

export default ImageComponent;
