import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Home.scss'

import Logo from '../assets/images/logo.svg'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div id="home">
        <div className="logo_wrap">
          <img src={Logo} alt="logo" className="logo" />
        </div>
      </div>
    )
  }
}
