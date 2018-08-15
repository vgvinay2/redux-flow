import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
console.log("Multiple reducer flow start");
const expenseDefaultState = []; 
const filterDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }= {}) => ({
  type: 'ADDEXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const removeExpense = ({ id } = {}) =>({
  type: 'REMOVE_EXPENSE',
  id
});
const editExpense = (id,update) =>({
  type: "EDIT_EXPENSE",
  id,
  update
});
const expenseReducer = (state = expenseDefaultState ,action) => {
  switch (action.type) {
    case 'ADDEXPENSE':
      return [...state,action.expense];
    case 'REMOVE_EXPENSE':
      return  state.filter(({ id })=>( id !== action.id ));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
         if(expense.id === action.id){
            return {...expense,
                    ...action.update
                  };
         }else{
           return state;
         }
      })  
    default:
      return state;
  }
};

const setTextFilter = (text = "") =>({
  type: "SET_TEXT_FILTER",
  text
});
const FilterReducer = (state = filterDefaultState ,action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filter: FilterReducer
  })
);

store.subscribe( () =>{
  console.log(store.getState());
});


const exp1 = store.dispatch(addExpense({description: "Raju", note: "Hi I am rock", amount: 566 }));
const exp2 = store.dispatch(addExpense({description: "Raja", note: "Hi I am super rock", amount: 5166 }));

store.dispatch(removeExpense({ id: exp1.expense.id}));
store.dispatch(editExpense(exp2.expense.id ,{ description: "I got you", note: "Its time to party", amount: 1500 }));

store.dispatch(setTextFilter('rent'));


// const demoState =  {
//   expenses: [{
//     id: "vinay",
//     description: "Learing multiple reducer",
//     note: "svdfhjvf",
//     amount: 450,
//     createdAt: 0
//   }],
//   filter: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };
// console.log({
//   text: "PLaying with spred operator",
//   ...demoState.filter,
//   location: "Bnagalore",
//   sortBy: "Power"
// })