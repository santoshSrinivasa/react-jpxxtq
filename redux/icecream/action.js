import {BUY_ICECREAM} from "./actionTypes";

export const buyIcecream = (number = 1) => {
  return {
    type : BUY_ICECREAM,
    payload: number
  }
}

//action creators will return the object with type property