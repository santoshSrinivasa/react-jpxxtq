import React,{useState} from "react";
import {connect} from "react-redux";
import {buyCake} from "./redux/cake";
import {buyIcecream} from "./redux/icecream";

function Item({item,buyitem}){
  return (
    <div>
    <h2>item - {item}</h2>
    <button onClick={buyitem}>buy item</button>
    </div>
  )
}

//using ownProps as second parameter, specifies what all props has been passed to the component
const mapStateToProps = (state,ownProps) => {
  const itemstate =  ownProps.cake ? state.cake.numofcakes : state.icecream.numoficecreams
  return {
    item : itemstate
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  const buy  = ownProps.cake ?
    () => dispatch(buyCake())
  : () => dispatch(buyIcecream())
  return {
    buyitem : buy
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);