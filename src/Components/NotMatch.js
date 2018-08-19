import React from "react";
import { Link } from "react-router-dom";
const NotMatch = () => (
  <div>
    <h1> Not match Page</h1>
    GO To <Link to = '/'>HOME </Link>
    <Link to = '/create'>EDIT   </Link>
    <Link to = '/delete'>EDIT </Link>
    <Link to = '/help'>Help </Link>
  </div>
);
export default NotMatch;