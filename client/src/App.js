import React, { Component } from 'react'
import Events from './pages/Events'
import Navbar from "./components/basic/Navbar"

export class App extends Component {


 
  render() {
    
    return (
      <div>
        <Navbar/>
        <h1>YouthGroup</h1>
        <Events/>
      </div>
    )
  }
}

export default App

