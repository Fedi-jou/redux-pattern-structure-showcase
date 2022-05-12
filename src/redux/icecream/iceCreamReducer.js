import React from "react";
import { BUY_ICE_CREAM } from "./iceCreamTypes";
const initialState = {
  NumberOfIceCream: 30,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: {
      return { ...state, NumberOfIceCream: state.NumberOfIceCream - 1 };
    }
    default:
      return state;
  }
};
export default iceCreamReducer;
