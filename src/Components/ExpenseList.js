import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpenseListItem";
import SelectExpenses from "../selectors/expenses";
const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList from </h1>
    {props.expenses.map(expense => {
      return <ExpensesListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const MapStateToProp = state => {
  return {
    expenses: SelectExpenses(state.expenses, state.filter),
  };
};
export default connect(MapStateToProp)(ExpenseList);
