
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/Home';
import EmpCreateAccount from './components/pages/EmpCreateAccount';
import DevCreateAccount from './components/pages/DevCreateAccount';
import DevSimple from './components/DevSimple';
import Feed from './components/Feed';


function App() {
  return (
    <Router>
       
      <div>
        <Route exact path="/feed" component ={Feed} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dev-create-account" component={DevCreateAccount} />
        <Route exact path="/emp-create-account" component={EmpCreateAccount} />
      </div>
     
    </Router>
   
  );
}

export default App;
