import React from "react";
class CounterApp extends React.Component {
    constructor(props){
      super(props);
      this.IncrementCounter =  this.IncrementCounter.bind(this);
      this.decrementCounter =  this.decrementCounter.bind(this);
      this.restCounter      =  this.restCounter.bind(this);
      this.state = {
      	count: 0
      }
    }

	IncrementCounter(){
		this.setState((preState) => {
			return{
				count: preState.count +1
			}
		});
	}
	decrementCounter(){
		this.setState((preState) => {
			return{
				count: preState.count -1
			}
		});
	}
	restCounter(){
      	this.setState(() => {
			return{
				count: 0
			}
		});
	}
	render(){
	  return(
		<div>
		    <h1>Count: <span style={{color: 'red'}}>{this.state.count}</span></h1>
		    <button onClick = {this.IncrementCounter}>+1</button>
		    <button onClick = {this.decrementCounter}>-1</button>
		    <button onClick = {this.restCounter}>Reset</button>
	    </div>
	  )
	}
};
export default CounterApp;