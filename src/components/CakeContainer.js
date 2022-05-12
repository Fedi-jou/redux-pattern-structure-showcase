import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

function CakeContainer(props) {
  const Buy = (props) => {
    return props.buyCake;
  };
  return (
    <div>
      <h1>Number of cakes {props.numberOfCakes}</h1>
      <button onClick={Buy(props)}>Buy a Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToPtoProps, mapDispatchToProps)(CakeContainer);
