import React, { Component } from "react";
import AppRouters from "./Routers/AppRouters";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";
import { setTextFilter } from "./action/filter";
import getVisibleExpenses from "./selectors/expenses";
const store = configureStore();
store.dispatch(
  addExpense({ description: "vinod note", note: "Hi I am rock", amount: 566 }),
);
store.dispatch(
  addExpense({
    description: "vinay gupta",
    note: "Hi I am super rock",
    amount: 5166,
  }),
);

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter("vin"));

setTimeout(() => {
  store.dispatch(setTextFilter("note"));
},3000)
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log("visibleExpenses", visibleExpenses);

console.log("state", state);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouters />
        </Provider>
      </div>
    );
  }
}
export default App;
