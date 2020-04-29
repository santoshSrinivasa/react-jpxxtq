import {createStore} from "redux";
import rootReducer from "./rootReducer";

//createStore will help us to createStore
//inside createStore we will pass the reducer
const store = createStore(rootReducer);

export default store;