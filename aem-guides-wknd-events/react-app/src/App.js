import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import HomeComponent from './components/HomeComponent';
// import AboutComponent from './components/AboutComponent';
import NotFoundComponent from './components/NotFoundComponent';

const HomeComponent = lazy(() =>
  import(/* webpackChunkName: "home" */ './components/HomeComponent')
);
const AboutComponent = lazy(() =>
  import(/* webpackChunkName: "home" */ './components/AboutComponent')
);

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Redirect exact from="/" to="/content/wknd-events/react/home.html" />
            <Route path="/content/wknd-events/react/home.html">
              <HomeComponent cqPath="/content/wknd-events/react/home" /> 
            </Route>
            <Route path="/content/wknd-events/react/about.html">
              <AboutComponent cqPath="/content/wknd-events/react/about" /> 
            </Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
      </Suspense>
    );
  }
}

export default App;
