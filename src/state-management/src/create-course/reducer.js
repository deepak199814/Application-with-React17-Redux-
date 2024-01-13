import { initialState } from "../index";
import * as types from "../action-constant/actionTypes";

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
