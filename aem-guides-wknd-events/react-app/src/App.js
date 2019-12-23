import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import NotFoundComponent from './components/NotFoundComponent';
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

class App extends Component {
  render() {
    // console.log(ModelManager.modelStore);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/content/wknd-events/react/home.html">
              <HomeComponent cqPath="/content/wknd-events/react/home" /> 
            </Route>
            <Route path="/content/wknd-events/react/about.html">
              <AboutComponent cqPath="/content/wknd-events/react/about" /> 
            </Route>
            {/* <Route exact path='/home' component={HomeComponent}></Route> */}
            {/* <Route exact path='/about' component={AboutComponent}></Route> */}
            <Route component={NotFoundComponent}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
