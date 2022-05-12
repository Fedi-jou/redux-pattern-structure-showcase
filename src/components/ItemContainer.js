import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
import BuyIceCream from "../redux/icecream/iceCreamActions";

function ItemContainer(props) {
  return (
    <>
      <div>Items - {props.item}</div>
      <button onClick={props.buyvalue}>buy </button>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.icecream.NumberOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(BuyIceCream());
  return {
    buyvalue: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
