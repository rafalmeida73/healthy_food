import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer'

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;