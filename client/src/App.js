import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Events from './pages/Events';
import Navbar from "./components/basic/Navbar";
import Login from "./pages/Login";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

export class App extends Component {


 
  render() {
    
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/home" component={Home}/>
            <Route exact component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

