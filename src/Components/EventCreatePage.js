import React from "react";
import { Link } from "react-router-dom";

const EventCreatePage = () => (
  <div>
    <h1> This is create page!</h1>
    <Link to = '/'>Home</Link>
    <Link to = '/delete'>EDIT</Link>
    <Link to = '/help'>Help </Link>
  </div>
);
export default EventCreatePage;