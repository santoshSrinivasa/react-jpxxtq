import {BUY_ICECREAM} from "./actionTypes";

export const buyIcecream = (number) => {
  return {
    type : BUY_ICECREAM,
    payload: number
  }
}