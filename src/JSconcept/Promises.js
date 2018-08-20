import React from "react";

// class PlayGame extends React.Component {
// state = {
//   count: 0,
//   start: false
// }
// handleClick = () =>{
//   this.setState((state)=>({count: ++state.count}))
//   this.state.start ? null : this.setTimer()
//   this.setState({start: true})
// };

// setTimer = () => {
//   setTimeout(() => {
//     this.setState({start: false})
//     if(this.state.count > 5) {
//       alert("Winner")
//       this.setState({count: 0})
//     } else {
//       alert("Play again")
//     }
//   }, 2000);
// }
//   render(){
//   return (<div>
//     <button onClick={this.handleClick}>Click Me</button>
//   </div>
// )}};

const StartGame =  () => {
  let count = 0;
  handleClick = () => {
    ++count ;
    console.log(count);
  };
  return new Promise((resolve,reject)=>{
    setInterval(()=>{
     if (count>5){
      resolve();
     }else{
      reject();
     }
    },2000)
  })
}

StartGame()
  .then(()=> alert(" winner"))
  .catch(()=> alert("you lost!!"))





class PlayGame extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState(state => ({ count: ++state.count }));
    console.log(this.state.count);
  };
  componentDidMount() {
    console.log("hihi");
    setInterval(() => {
      if (this.state.count > 5) {
        alert("Winner");
        this.setState({ count: 0 });
      } else {
        alert("Play again");
      }
    }, 2000);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
export default PlayGame;
