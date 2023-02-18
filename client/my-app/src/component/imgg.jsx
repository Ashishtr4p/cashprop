import React, { useState, useEffect } from 'react';

function Image({ imageId }) {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(`/api/images/${imageId}`);
      const data = await response.json();
      setImageData(`data:image/jpeg;base64,${data.imageData}`);
    }
    fetchImage();
  }, [imageId]);

  return (
    <div>
      {imageData ? (
        <img src={imageData} alt="" class="img-a img-fluid " style={{height: '400px', width: '400px',borderRadius:'10% 10% 0% 0%'}}/>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default Image;


