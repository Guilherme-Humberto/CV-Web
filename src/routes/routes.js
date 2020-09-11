import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from '../pages/Main'
import UserPage from '../pages/UserPage'
import NotFound from '../pages/NotFound'
import { isAuthenticated } from '../config/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => isAuthenticated() ? (
      <Component {...props}/>
    ): (
      <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
    )}
  />
)

function Routes() {
  return (
      <Switch>
          <Route exact path="/" component={Main}/>
          <PrivateRoute path="/Home" component={UserPage}/>
          <Route component={NotFound}/>
      </Switch>
  );
}

export default Routes;