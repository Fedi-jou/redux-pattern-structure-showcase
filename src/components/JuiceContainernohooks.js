import React from "react";
import { connect } from "react-redux";
import { juiceAction } from "../redux/juice/juiceAction";

const JuiceContainernohooks = (props) => {
  return (
    <div>
      <h1>Number of juice : {props.numberOfJuice} </h1>
      <button
        onClick={() => {
          return props.juiceAction();
        }}
      >
        Buy Juice
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { numberOfJuice: state.juice.juice };
};
const mapDispatchToProps = (dispatch) => {
  return {
    juiceAction: () => dispatch(juiceAction()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuiceContainernohooks);
