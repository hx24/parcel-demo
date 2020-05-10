import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  click = () => {
    this.setState({
      num: this.state.num + 1
    })

    // axios.get('http://localhost:3000/api/num')  // 跨域
    axios.get('/api/num').then(data => {  // 走开发代理
      console.log('data', data)
    })
  }
  render() {
    return (
      <div>
        <div>home1231241</div>
        <div>num: {this.state.num}</div>
        <button onClick={this.click}>+1</button>
      </div>
    )
  }
}

export default Home