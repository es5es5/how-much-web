import React, { Component } from 'react'
import { authService, firebaseInstance } from 'fbase'
import { Link } from 'react-router-dom'

import './Login.scss'

import logo from '../assets/images/logo.png'
import google from '../assets/images/google.svg'

export default class Login extends Component {
  onSocialClick = async (event) => {
    const { name } = event.target
    let provider = null
    switch (name) {
      case 'google':
        provider = new firebaseInstance.auth.GoogleAuthProvider()
        break
      case 'github':
        provider = new firebaseInstance.auth.GithubAuthProvider()
        break
      default:
        break
    }
    await authService.signInWithPopup(provider)
  }

  render() {
    return (
      <div id="login">
        <div className="logo_wrap">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="sign_wrap">
          <div className="social_wrap">
            <Link to="/main">
              <button type="button" className="btn-social google" name="google">
                <img src={google} alt="google" className="social-logo" />
                구글 계정으로 로그인
              </button>
            </Link>
            {/* <button type="button" className="btn-social anonymous" onClick={signInAnonymously}>
              <img src="@/assets/images/woman.svg" alt="anonymous" className="social-logo" />
              게스트 계정으로 로그인
            </button> */}
          </div>
        </div>
      </div>
    )
  }
}
