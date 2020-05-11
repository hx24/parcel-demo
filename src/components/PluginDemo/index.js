import React, { Component } from 'react'

@test
class App extends Component {
  name = 'hx'
  render() {
    return <div>{this.name}</div>
  }
}

function test(Comp) {
  return Comp
}


export default App