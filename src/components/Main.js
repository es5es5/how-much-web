import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Odometer from 'react-odometerjs';

import './Main.scss'
import { Top, Middle, Bottom } from 'data/chatter'
export default class Main extends Component {
  state = {
    chatter: '',
    odometerValue: 0,
    myRank: Math.floor(Math.random() * 3) + 1,
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

  setChatter () {
    switch (this.state.myRank) {
      case 1:
        return Top[Math.floor(Math.random() * Top.length)]
      case 2:
        return Middle[Math.floor(Math.random() * Top.length)]
      case 3:
        return Bottom[Math.floor(Math.random() * Top.length)]
      default:
        return '배고파'
    }
  }

  componentDidMount() {
    this.setState({
      odometerValue: 142000,
      chatter: this.setChatter()
    })
  }

  render() {
    return (
      <div id="main">
        <section className="info_wrap">
          <p className="chatter">{this.state.chatter}</p>
          <disv className="odometer_wrap">
            <span className="won">￦</span>
            <Odometer
              value={this.state.odometerValue}
              duration={300}
              format="ddd,ddd,ddd"
              auto={true}
            />
          </disv>
        <p className="myRank">현재 랭킹 <span className="number">{this.state.myRank}위</span></p>
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

        <section className="action_wrap">
          <Link to="/create">
            <button type="button" className="btn primary fill">장부 입력</button>
          </Link>
        </section>
      </div>
    )
  }
}
