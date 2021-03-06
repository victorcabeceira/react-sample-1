import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RandomCatImage } from '../../core/services';

import classes from './CatImage.module.css';

export default props => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCatImage();
  }, []);

  const loadCatImage = async () => {
    const image = await new RandomCatImage().getCatImage();

    if (image.success) setImage(image.data[0].url)
    else setError(image.error.message)
  }

  return (
    <div>
      <Link to='/' className={classes.TitleText}>Back to home</Link>
      <p className={classes.TitleText}>A cat</p>
      {error.length ?
        <p className={classes.ErrorText}>Error: {error}</p> :
        <div className={classes.ImageContainer}>
          <img src={image} alt='A cat' />
        </div>
      }

    </div>
  )
}