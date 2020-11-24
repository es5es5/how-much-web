import React, { Component } from 'react'

import Odometer from 'react-odometerjs';

import './Main.scss'

export default class Main extends Component {
  state = {
    odometerValue: 0
  }

  componentDidMount() {
    this.setState({
      odometerValue: 142000
    })
  }

  render() {
    return (
      <div id="main">
        <section className="info_wrap">
          <p className="chatter">내가 이만큼이나 먹었다고?</p>
          <div className="odometer_wrap">
            <span className="won">￦</span>
            <Odometer
              value={this.state.odometerValue}
              duration={300}
              format="ddd,ddd,ddd"
              auto={true}
            />
          </div>
          <p className="myRank">현재 랭킹 <span className="number">1위</span></p>
        </section>

        <section className="rank_wrap">
          <ul className="rank">
            <li className="rank-item">
              <span className="number">1</span>
              <span className="userName">김루이</span>
              <span className="pay">24,000</span>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}
