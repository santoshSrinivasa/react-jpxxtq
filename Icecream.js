import React,{useState} from "react";
import {connect} from "react-redux";
import {buyIcecream} from "./redux/icecream";

function Icecream({numoficecreams,buyIcecream}){
  const [number,setNumber] = useState(1);
  return (
    <div>
    <h2>num of icecreams - {numoficecreams}</h2>
    <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
    <button onClick={()=>buyIcecream(number)}>buy {number} icecream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numoficecreams : state.icecream.numoficecreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: (number) => dispatch(buyIcecream(number))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Icecream);