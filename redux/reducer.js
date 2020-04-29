import {BUY_CAKE} from "./actionTypes";

const initialState = {
  numofcakes : 10,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE : return {
      ...state,
      numofcakes : state.numofcakes - action.payload
    }
    default: return state
  }
}
export default reducer;