import { hot } from "react-hot-loader"
import React, { Component } from 'react'
import Home from 'components/Home'

class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default hot(module)(App)