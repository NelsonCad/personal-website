import React from 'react';
import './App.css';
import NavBar from "./components/Nav";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Splash from "./pages/splash";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={Splash} />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
