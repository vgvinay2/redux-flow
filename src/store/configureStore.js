import {createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';

export default ()=> {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filter: FilterReducer
    })
  );
  return store;
};