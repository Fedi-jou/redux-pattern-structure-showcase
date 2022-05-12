import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { juiceAction } from "../redux/juice/juiceAction";

const JuiceContainer = () => {
  const numberOfJuice = useSelector((state) => {
    return state.juice.juice;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of juice : {numberOfJuice} </h1>
      <button
        onClick={() => {
          dispatch(juiceAction());
        }}
      >
        Buy Juice
      </button>
    </div>
  );
};

export default JuiceContainer;
