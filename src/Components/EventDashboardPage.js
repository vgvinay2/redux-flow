import React from "react";
import { Link } from "react-router-dom";
const EventDashboardPage = () => (
  <div>
    <h1> HI I am Dashboardpage!</h1>
    <Link to = '/create'>EDIT</Link>
    <Link to = '/delete'>DELETE</Link>
    <Link to = '/help'>Help </Link>
  </div>
);

export default EventDashboardPage;