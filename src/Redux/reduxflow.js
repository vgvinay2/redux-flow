import {createStore} from 'redux';
 console.log("hihi");
//Store nedd two arg 1 fuction ,& 2 is Action 
//Store Generator Start
const CountIncrement = ({ incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
})

const DecrementCount = ({ decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
})

const ResetCount = () => ({
  type: "RESET"
})

const AgainSetCount = ({ setby = 100 } = {}) =>({
  type: "SET",
  setby
});
//Store generator End

//Reducer Start
//1 Reducer is pure Function
//2   Never chnage state or Action
const CountReducer = (state= { count: 0},action)=>{
  switch (action.type){
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
    case "RESET":
      return {
        count: 0
      }
    case "SET":
      return {
        count: action.setby
      }      
    default:
      return state;
  }
};
//Reducer End 

//Store Creation by Reducer 
const store = createStore(CountReducer);



store.subscribe(()=>{
  console.log(store.getState());
});

//Action Object send to Strore by calling Dispact action
store.dispatch(CountIncrement({ incrementBy: 3}));
store.dispatch(DecrementCount());
store.dispatch(ResetCount());
store.dispatch(DecrementCount({decrementBy: 5}));
store.dispatch(AgainSetCount({setby:10}));
store.dispatch(AgainSetCount());


console.log("END SIngle redux flow");