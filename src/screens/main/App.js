import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './App.css';

const app = props => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
            </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
            </a>
      <Link to='/cats'>Cats</Link>
      <Link to='/form'>Form</Link>

    </header>
  )
}

export default app;
