import React, { Component } from 'react'

class Counter extends Component {
  state = {
    num: 1,
  }

  click = () => {
    this.setState({
      num: this.state.num + 1,
    })
  }
  render() {
    return (
      <div>
        <div>counter 修改了</div>
        <div>num: {this.state.num}</div>
        <button onClick={this.click}>+1</button>
      </div>
    )
  }
}

export default Counter
