import { hot } from 'react-hot-loader'
import React, { Component } from 'react'
import PluginDemo from './components/PluginDemo'
import Counter from './components/Counter'
import './ttt'

class App extends Component {
  render() {
    return (
      <div>
        <PluginDemo />
        <Counter />
      </div>
    )
  }
}

export default hot(module)(App)
