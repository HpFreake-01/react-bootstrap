import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navibar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Users from './Components/Users';
import About from './Components/About';
import Footer from "./Components/Footer";

const App =()=> {
  return(
      <div>
        <Router>
          <Navibar/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/users" component={Users}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
        <Footer/>
      </div>
  )
}

export default App;
