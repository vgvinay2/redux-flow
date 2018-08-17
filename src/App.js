import React, { Component } from "react";
// import './Redux/reduxflow';
// import './Redux/MultipleReducerflow';
import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";
import { setTextFilter } from "./action/filter";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//React routes start
const EventDashboardPage = () => (
  <div>
    <h1> HI I am Dashboardpage</h1>
    <Link to = '/create'>EDIT</Link>
    <Link to = '/delete'>DELETE</Link>
    <Link to = '/help'>Help </Link>
  </div>
);

const EventCreatePage = () => (
  <div>
    <h1> This is create page</h1>
    <Link to = '/'>Home</Link>
    <Link to = '/delete'>EDIT</Link>
    <Link to = '/help'>Help </Link>
  </div>
);

const EventDeletePage = () => (
  <div>
    <h1> This is create page</h1>
    <Link to = '/'>Home</Link>
    <Link to = '/create'>EDIT</Link>
    <Link to = '/help'>Help </Link>
  </div>
);
const NotMatch = () => (
  <div>
    <h1> Not match Page</h1>
    GO To <Link to = '/'>HOME </Link>
    <Link to = '/create'>EDIT   </Link>
    <Link to = '/delete'>EDIT </Link>
    <Link to = '/help'>Help </Link>
  </div>
);
const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={EventDashboardPage} exact={true} />
      <Route path="/create" component={EventCreatePage} />
      <Route path="/delete" component={EventDeletePage} />
      <Route component={NotMatch} />
    </Switch>
  </BrowserRouter>
);

const store = configureStore();
store.dispatch(
  addExpense({ description: "vinay", note: "Hi I am rock", amount: 566 }),
);
store.dispatch(
  addExpense({
    description: "gupta",
    note: "Hi I am super rock",
    amount: 5166,
  }),
);
store.dispatch(setTextFilter("rent"));
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>yo yo setup is ready</p>
        <Root />
      </div>
    );
  }
}

export default App;
