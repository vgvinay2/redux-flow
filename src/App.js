import React, { Component } from 'react';
// import './Redux/reduxflow';
// import './Redux/MultipleReducerflow';
import configureStore from './store/configureStore'
import {addExpense } from './action/expenses';
import { setTextFilter } from './action/filter';

const store = configureStore();
store.dispatch(addExpense({description: "vinay", note: "Hi I am rock", amount: 566 }));
store.dispatch(addExpense({description: "gupta", note: "Hi I am super rock", amount: 5166 }));
store.dispatch(setTextFilter('rent'));
console.log(store.getState());



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>yo yo setup is ready</p>
      </div>
    );
  }
}

export default App;
