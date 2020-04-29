import {BUY_ICECREAM} from "./actionTypes";


//create a inititalState object
const initialState = {
  numoficecreams : 30,
}

const icecreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM : return {
      ...state,
      numoficecreams : state.numoficecreams - action.payload
    }
    default: return state
  }
}
export default icecreamReducer;


//reducer function will take (currentState,action) and will return newState
//use spread operators to make a copy of object(initialState), so that when we are updating the object makes only that particular property change
