import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Main = lazy(() => {
  return import('./main');
});

const Cats = lazy(() => {
  return import('./catImage');
});

const app = props => {
  const routes = (
    <div>
      <Route exact path='/cats' component={Cats} />
      <Route exact path='/' component={Main} />
      <Redirect to='/' />
    </div>
  )

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Router className='App'>
          {routes}
        </Router>
      </Suspense>
    </Fragment>
  )
}

export default app;
