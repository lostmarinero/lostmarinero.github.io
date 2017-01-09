// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Projects from './Projects'
import ProjectsContainer from './ProjectsContainer'
import Project from './Project'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/projects" component={ProjectsContainer}>
      <IndexRoute component={Projects}/>
      <Route path="/projects/:id" component={Project}/>
    </Route>
  </Route>
)
