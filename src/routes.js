import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Pages/main/App';


const Routes = () => (
 <BrowserRouter>
  <Switch>
   <Route exact path="/" > <App /> </Route>
  </Switch>
 </BrowserRouter>
);

export default Routes;