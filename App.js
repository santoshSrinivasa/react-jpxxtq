import React, { Component } from 'react';
import Cake from "./Cake";
import Icecream from "./Icecream";
import {Provider} from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Cake/>  
        <Icecream/>      
      </div>
      </Provider>
    );
  }
}

export default App;