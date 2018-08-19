import React, { Component } from "react";
import AppRouters from './Routers/AppRouters'
import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";
import { setTextFilter } from "./action/filter";
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
store.dispatch(
  addExpense({ description: "vinay", note: "Hi I am rock", amount: 566 }),
);
store.dispatch(
  addExpense({ description: "gupta", note: "Hi I am super rock", amount: 5166 }),
);

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log("visibleExpenses",visibleExpenses);

console.log("state",state);


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>yo yo setup is ready</p>
        <AppRouters />
      </div>
    );
  }
}

export default App;
