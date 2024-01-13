import React from 'react'
import {Link} from "react-router-dom"


const HomePage = () => (
  <div className="jumbotron">
    <h1>Adminstration</h1>
    <p>React,Router,Redux for webapp</p>
    <Link to="about" className="btn btn-primary">
      Learn More
    </Link>
  </div>
);

export default HomePage;