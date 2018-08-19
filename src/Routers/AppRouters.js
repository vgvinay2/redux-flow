import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventDashboardPage from '../Components/EventDashboardPage';
import EventCreatePage from '../Components/EventCreatePage';
import EventEditPage from '../Components/EventEditPage';
import EventDeletePage from '../Components/EventDeletePage';
import NotMatch from '../Components/NotMatch';
import HelpPage from '../Components/HelpPage';

const AppRouters = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={EventDashboardPage} exact={true} />
      <Route path="/create" component={EventCreatePage} />
      <Route path="/edit" component={EventEditPage} />
      <Route path="/delete" component={EventDeletePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotMatch} />
    </Switch>
  </BrowserRouter>
);
export default AppRouters;