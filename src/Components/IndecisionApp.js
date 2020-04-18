	import React from "react";
	import HelpPage from './HelpPage'
	import CounterApp from './CounterApp'
	import Visibality from './Visibality'

	class IndecisionApp extends React.Component {

		constructor(props){
			super(props);
			this.handlePick      =  this.handlePick.bind(this);
			this.removePick      =  this.removePick.bind(this);
			this.handleAdd       =  this.handleAdd.bind(this);
			this.state = {
				obtions: ['One Thing', 'Two Thing', 'Three Things']
			}
		}
		handlePick(){
			alert('3');
		}
		removePick(){
			this.setState((prevState) => {
				return{
					obtions: []
				}
			})
		}
		handleAdd(event){
			event.preventDefault();
			const value = event.target.elements.obtion.value;
			if (!value){
				alert('Enter valid value to add');
				return false;
			}else if(this.state.obtions.indexOf(value) > -1) {
				alert('All ready added');
			    return false;
			}
			this.setState((prevState) => {
				return{
					obtions: prevState.obtions.concat(value)
				}
			})
			event.target.elements.obtion.value = '';
		}
		render(){
			const titile = 'Indecision';
			const subtitile = "let's play with react in real life"
			return(
				<div style={{textAlign: 'center'}}>
				<h2 style={{color: 'red'}}> This is Application 1.................</h2>
				<h1> {titile}</h1>
				<p> {subtitile}</p>

				<button onClick = {this.handlePick}> what should i Do? </button>
				{this.state.obtions.length>0 ? this.state.obtions.map(
					(ele) => <p key = {ele} style={{color: 'green'}}>{ele}</p> 
					) : null }

					<form onSubmit={this.handleAdd} >
					<input type ='text' name= 'obtion' />
					<button>submit/AddObtion</button>
					</form>


				{/*this is complted counter app start*/}
				<button onClick = {this.removePick}> RemoveAll </button>





				<h2 style={{color: 'green'}}> This is Application 2  counter.................</h2>
				<h1> building counter App</h1>
				<CounterApp />
			{/*this is complted counter app end*/}
			<h2 style={{color: 'blue'}}> This is Application 3 Visibality .................</h2>
			<Visibality />
			<h2 style={{color: 'orange'}}> This is functional component .................</h2>
			<User  name='vinay' age='26'/>
			</div>
			)
		}
	};

	{/* implementation of functional component start can not use state
	in this and it is faster it is just presentational */}
	const User = (props) => {
		return(
		<div>
		name:{props.name}
		age: {props.age}
		</div>
		)
	}
	{/* implementation of functional component end */}

	export default IndecisionApp;
