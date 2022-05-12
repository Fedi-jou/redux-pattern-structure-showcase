import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes {numberOfCakes}</h2>
      {/* <button onClick={() => dispatch({ type: "BUY_CAKE" })}>Buy A Cake</button> */}
      <button onClick={() => dispatch(buyCake())}>Buy A Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
