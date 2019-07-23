import React, { useState, useEffect } from 'react';

import { RandomCatImage } from '../../core/services';

export default props => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadCatImage();
  }, []);

  const loadCatImage = async () => {
    const image = await new RandomCatImage().getCatImage();
    console.log('image', image);
    if (image.success) {
      setImage(image.data[0].url);
    }
  }

  return (
    <div>
      <p>A cat</p>
      <img src={image} alt='A cat' />
    </div>
  )
}