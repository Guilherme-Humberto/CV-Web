import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import Locals from '../pages/Locals'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/locals" component={Locals}/>
          <Route component={NotFound}/>
      </Switch>
  );
}

export default Routes;