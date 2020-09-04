import React from 'react';

import MainPage from './_MainPage/index'
import HistoricPage from './_HistoricPage/index'
import CampaignsPage from './_CampaignsPage/index'
import MapPage from './_MapPage/index'

import { Switch, Route } from 'react-router-dom'

function UserPage() {
  return (
    <>
    <Switch>
      <Route exact path="/Home" component={MainPage}/>
      <Route path="/Home/historic" component={HistoricPage}/>
      <Route path="/Home/campaigns" component={CampaignsPage}/>
      <Route path="/Home/map" component={MapPage}/>
    </Switch>
      
    </>
  );
}

export default UserPage;