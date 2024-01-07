import React from "react";

class CoursePage extends React.Component {
  //we can remove constructor and super(props) too but still this clas field
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
    alert(this.state.course.title);
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
      </form>
    );
  }
}
export default CoursePage;
