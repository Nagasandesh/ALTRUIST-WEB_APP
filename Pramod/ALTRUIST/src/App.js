import React from "react";
import "./App.css";
import Chatlogin from "./Chatlogin";
import Sidebar from "./Sidebar";
import Login from "./pages/Login.js";


import "./website.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';
import Ngo from './pages/Ngo';

function App() {

  return (


    
    <div className="app">

<Router>
      
      <Switch>
        
        <Route path='/Chatlogin' exact component={Chatlogin}/>
        <div>
          <Navbar />
          <Route path='/' exact component={Home}/>
          <Route path='/Ngo' exact component={Ngo}/>
          <Route path='/GetInTouch' exact component={GetInTouch}/>
        </div>
        
      </Switch>
    </Router>

    </div>
  );
}

export default App;
