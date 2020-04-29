import React,{useState} from "react";
import {connect} from "react-redux";
import {buyIcecream} from "./redux/icecream";

//we can use props.numoficecreams to access the state
//we can use props.buyIcecream to dispatch the actions
//array destructuring can also be used instead of calling props.numoficecreams
function Icecream({numoficecreams,buyIcecream}){
  //useState to store and update the number
  const [number,setNumber] = useState(1);
  return (
    <div>
    <h2>num of icecreams - {numoficecreams}</h2>
    <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
    <button onClick={()=>buyIcecream(number)}>buy {number} icecream</button>
    </div>
  )
}

//mapStateToProps is used to fetch the data from the store 
const mapStateToProps = (state) => {
  return {
    numoficecreams : state.icecream.numoficecreams
  }
}

//mapDispatchToProps is to dispatch the actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: (number) => dispatch(buyIcecream(number))
  }
}

//connect is used to connect the component to the store
export default connect(mapStateToProps,mapDispatchToProps)(Icecream);