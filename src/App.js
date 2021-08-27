import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";


function App() {
  return (
   

    <Router>
       <Navbar/>

      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>  
      
    </Router>
    

  );
}

export default App;
