import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import juiceReducer from "./juice/juiceReducer";
import userReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  juice: juiceReducer,
  user: userReducer,
});
