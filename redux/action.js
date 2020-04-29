import {BUY_CAKE} from "./actionTypes";

export const buyCake = (number) => {
  return {
    type : BUY_CAKE,
    payload: number
  }
}