import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './App.css';

const Cats = lazy(() => {
  return import('../catImage');
});

const app = props => {
  const routes = (
    <div>
      <Route exact path='/cats' component={Cats} />
      <Redirect to='/' />
    </div>
  )

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Router className='App'>
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

          </header>
          {routes}
        </Router>
      </Suspense>
    </Fragment>
  )
}

export default app;
