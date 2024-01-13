//export function createCourse(course){***}

export function createCourse(course) {
  return {
    type: "CREATE_COURSE",
    course,
  };
}
