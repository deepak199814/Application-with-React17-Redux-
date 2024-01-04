import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homecomponent/HomePage";
import AboutPage from "./aboutcomponent/AboutPage";
import Header from "./headercomponent/Header";
import Pagenotfound from "./Pagenotfoundcomponent/Pagenotfound";
import CoursePage from "./courses/CoursePage"

export default function App(){
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursePage} />
          <Route component={Pagenotfound} />
        </Switch>
      </div>
    );
}
