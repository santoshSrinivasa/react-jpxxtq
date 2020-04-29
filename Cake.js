import React,{useState} from "react";
import {connect} from "react-redux";
import {buyCake} from "./redux/cake";

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


//mapStateToProps is used to fetch the data from the store 
const mapStateToProps = (state) => {
  return {
    numofcakes : state.cake.numofcakes
  }
}

//mapDispatchToProps is to dispatch the actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

//connect is used to connect the component to the store
export default connect(mapStateToProps,mapDispatchToProps)(Cake);