import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from './ExpenseListFilter';
const EventDashboardPage = () => (
  <div>
    <h1> HI I am Dashboardpage!</h1>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default EventDashboardPage;
