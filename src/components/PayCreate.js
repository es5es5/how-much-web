import React, { Component } from 'react'

import './PayCreate.scss'

export class PayCreate extends Component {
  state = {
    pay: ''
  }
  componentDidMount() {
  }
  onChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'pay':
        this.setState({
          pay: value
        })
        break
      default:
        break
    }
  }
  render() {
    return (
      <div id="payCreate">
        <div className="title_wrap">
          <h2>얼마에요?</h2>
        </div>
        <div className="form_wrap">
          <form onSubmit={() => {}}>
            <input type="text" value={this.state.pay} name="pay" onChange={this.onChange} className="payInput" />
          </form>
        </div>
      </div>
    )
  }
}

export default PayCreate
