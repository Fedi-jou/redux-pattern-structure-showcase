import { BUY_JUICE } from "./juiceTypes";
const initialState = {
  juice: 50,
};

const juiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE: {
      return { ...state, juice: state.juice - 1 };
    }
    default:
      return state;
  }
};

export default juiceReducer;
