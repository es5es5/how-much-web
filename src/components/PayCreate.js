import React, { Component } from "react";

import "./PayCreate.scss";

export class PayCreate extends Component {
  state = {
    pay: "0",
    payer: "",
    payType: "N빵",
  };
  componentDidMount() {
    // set Payer to ME.
    this.setState({ payer: "김루이" });
  }
  onChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "pay":
        this.setState({ pay: value });
        break;
      case "payer":
        this.setState({ payer: value });
        break;
      case "payType":
        this.setState({ payType: value });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div id="payCreate">
        <div className="form_wrap">
          <form onSubmit={() => {}}>
            <fieldset>
              <div className="row">
                <label htmlFor="pay">얼마에요?</label>
                <input
                  id="pay"
                  type="number"
                  value={this.state.pay}
                  name="pay"
                  onChange={this.onChange}
                />
              </div>

              <div className="row">
                <label htmlFor="payer">누가냄?</label>
                <select
                  name="payer"
                  id="payer"
                  value={this.state.payer}
                  onChange={this.onChange}
                >
                  <option value="김루이">김루이</option>
                  <option value="일승이">일승이</option>
                </select>
              </div>

              <div className="row">
                <label htmlFor="payType">어케냄?</label>
                <div className="check_wrap" onChange={this.onChange}>
                  <input
                    type="radio"
                    id="payTypeN빵"
                    name="payType"
                    value="N빵"
                    defaultChecked={this.state.payType === "N빵"}
                  />
                  <label htmlFor="payTypeN빵" className="checkLabel">
                    N빵
                  </label>

                  <input
                    type="radio"
                    id="payType제각각"
                    name="payType"
                    value="제각각"
                    defaultChecked={this.state.payType === "제각각"}
                  />
                  <label htmlFor="payType제각각" className="checkLabel">
                    제각각
                  </label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default PayCreate;
