import React, { Component } from 'react'

import Odometer from 'react-odometerjs';

import './PayCreate.scss'

export class PayCreate extends Component {
  state = {
    odometerValue: 0,
  }
  componentDidMount() {
    this.setState({
      odometerValue: 23131,
    })
  }
  render() {
    return (
      <div id="payCreate">
        <div className="odometer_wrap">
          <span className="won">￦</span>
          <Odometer
            value={this.state.odometerValue}
            duration={100}
            format="ddd,ddd,ddd"
            auto={true}
          />
        </div>
      </div>
    )
  }
}

export default PayCreate
