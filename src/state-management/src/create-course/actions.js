import * as types from "../action-constant/actionTypes";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  };
}
