import {BUY_ICECREAM} from "./actionTypes";

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