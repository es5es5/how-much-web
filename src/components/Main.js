import React, { Component } from 'react'

import Odometer from 'react-odometerjs';

import './Main.scss'

export default class Main extends Component {
  state = {
    odometerValue: 0
  }

  componentDidMount() {
    this.setState({
      odometerValue: 214122
    })
  }

  render() {
    return (
      <div id="main">
        <div className="count_wrap">
          <span className="won">￦</span>
          <Odometer
            value={this.state.odometerValue}
            duration={1000}
            format="ddd,ddd,ddd"
            auto={true}
          />
        </div>
      </div>
    )
  }
}
