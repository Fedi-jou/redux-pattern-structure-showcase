import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  console.log(number);
  return (
    <div>
      <h1>Number of cakes {props.numberOfCakes}</h1>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
      <input
        type="text"
        value={number}
        placeholder="add a number"
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}
const mapStateToPtoProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToPtoProps, mapDispatchToProps)(CakeContainer);
