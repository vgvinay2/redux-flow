import React from "react";
import { Link } from "react-router-dom";

const EventDeletePage = () => (
  <div>
    <h1> This is create page</h1>
    <Link to = '/'>Home</Link>
    <Link to = '/create'>EDIT</Link>
    <Link to = '/help'>Help </Link>
  </div>
);

export default EventDeletePage;