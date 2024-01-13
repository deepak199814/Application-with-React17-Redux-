import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import * as courseActions from "../../state-management/src/create-course/actions";

class CoursePage extends React.Component {
  //we can remove constructor and super(props) too but still this is class field
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    //Arrow function will inherit the binding context of their enclosing scope[class fields]
    const course = { ...this.state.course, title: event.target.value };
    //this.setState({ course: course });
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map((course) => {
          return <div key={course.title}>{course.title}</div>;
        })}
      </form>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
