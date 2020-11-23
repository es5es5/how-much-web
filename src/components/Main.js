import React, { Component } from 'react'

import Odometer from 'react-odometerjs';

import './Main.scss'

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Odometer
          value={99999}
          format="dd"
          auto={true}
        />
      </div>
    )
  }
}
