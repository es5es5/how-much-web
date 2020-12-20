import React, { Component } from 'react'

import './PayCreate.scss'

export class PayCreate extends Component {
  state = {
    pay: '',
    payer: '',
    payType: 'N빵'
  }
  componentDidMount() {
  }
  onChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'pay':
        this.setState({ pay: value })
        break
      default:
        break
    }
  }
  render() {
    return (
      <div id="payCreate">
        <div className="form_wrap">
          <form onSubmit={() => {}}>
            <fieldset>
              <div className="row">
                <label htmlFor="pay">얼마에요?</label>
                <input id="pay" type="number" value={this.state.pay} name="pay" onChange={this.onChange} className="payInput" />
              </div>

              <div className="row">
                <label htmlFor="payer">누가냄?</label>
                <select name="payer" id="payer">
                  <option value="">김루이</option>
                </select>
              </div>

              <div className="row">
                <label htmlFor="payType">어케냄?</label>
                <div className="check_wrap">
                  <input type="radio" id="payTypeN빵" name="payType" value="N빵" />
                  <label htmlFor="payTypeN빵" className="checkLabel">N빵</label>

                  <input type="radio" id="payType제각각" name="payType" value="제각각" />
                  <label htmlFor="payType제각각" className="checkLabel">제각각</label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default PayCreate
