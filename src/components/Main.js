import React, { Component } from 'react'

import Odometer from 'react-odometerjs';

import './Main.scss'

export default class Main extends Component {
  state = {
    odometerValue: 0,
    rankList: [
      {
        rank: 1,
        userName: '김루이',
        pay: '24,000'
      },
      {
        rank: 1,
        userName: '박보검',
        pay: '24,000'
      },
      {
        rank: 1,
        userName: '홍길이',
        pay: '24,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
      {
        rank: 1,
        userName: '김루이',
        pay: '11,000'
      },
    ]
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
            {this.state.rankList.map((rank, index) => (
            <li className={`rank-item _${index + 1}`} key={index}>
              <span className={`rank`}>{index + 1}</span>
              <span className="userName">{rank.userName}</span>
              <span className="pay"><span className="won">￦</span>{rank.pay}</span>
            </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}
