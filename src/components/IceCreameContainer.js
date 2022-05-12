import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BuyIceCream from "../redux/icecream/iceCreamActions";

const IceCreameContainer = () => {
  const icecream = useSelector((state) => state.icecream.NumberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>IceCream {icecream}</h1>
      <button
        onClick={() => {
          dispatch(BuyIceCream());
        }}
      >
        Buy Ice Cream
      </button>
    </div>
  );
};

export default IceCreameContainer;
