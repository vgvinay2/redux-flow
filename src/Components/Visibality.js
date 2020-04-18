import React from "react";
class Visibality extends React.Component {
    constructor(props){
      super(props);
      this.checkVisible      =  this.checkVisible.bind(this);
      this.state = {
      	visibality: true
      }
    }

	checkVisible(){
		this.setState((preState) => {
			return{
				visibality: !preState.visibality
			}
		});
	}
	render(){
	  let visibality = this.state.visibality
	  return(
		<div>
		    <h1>Visibality Toggle</h1>
		    <button onClick = {this.checkVisible}>{visibality ? 'Hide details' : 'Show details' }</button>
		    {visibality && ( <p style={{color: 'red'}}> some text will display if true</p>)}
		    
	    </div>
	  )
	}
};
export default Visibality;