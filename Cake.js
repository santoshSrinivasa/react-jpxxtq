import React,{useState} from "react";
import {connect} from "react-redux";
import {buyCake} from "./redux";

function Cake({numofcakes,buyCake}){
  const [number,setNumber] = useState(1);
  return (
    <div>
    <h2>num of cakes - {numofcakes}</h2>
    <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
    <button onClick={()=>buyCake(number)}>buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numofcakes : state.numofcakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cake);