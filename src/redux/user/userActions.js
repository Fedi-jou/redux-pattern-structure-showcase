import { FETCH_USERS_REQUEST } from "./userActionTypes";
import { FETCH_USERS_SUCCESS } from "./userActionTypes";
import { FETCH_USERS_FAIL } from "./userActionTypes";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  };
};

//async fetchusers action creator

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest);
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFail(errorMsg));
      });
  };
};
