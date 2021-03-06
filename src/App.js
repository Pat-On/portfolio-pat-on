/*
 * IMPORTANT COMMENT
 * THIS IS FIRST VERSION WHICH REQUIRES TO DO:
 * CLEAN SASS AND JS CODE
 * UNIFY CODE + REUSABILITY
 *
 * THIS PROJECT IS USED BY ME TO PRACTICE SCSS
 * SO I MAY NOT FOLLOW ALL GOOD PRACTICES OF WRITING CODE
 */

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import About from "./components/about/about";
import MySkills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Layout from "./hoc/Layout/Layout";

import "./App.scss";

function App() {
  //temporary added DIV to reuse old style from react
  return (
    <div className="App container">
      <Layout>
        <Switch>
          <Route path="/skills" render={(props) => <MySkills {...props} />} />
          <Route path="/projects" render={(props) => <Projects {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route path="/" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
