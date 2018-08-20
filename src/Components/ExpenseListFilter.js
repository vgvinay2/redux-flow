import React from "react";
import {connect } from 'react-redux'
import {setTextFilter} from '../action/filter'
const ExpenseListFilter = (props) => (
  <div>
    <input type = "text" value = {props.filter.text} onChange = {(e)=>{
      props.dispatch(setTextFilter(e.target.value))
    }}/>
  </div>
);
const mapStateToProp = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProp)(ExpenseListFilter);