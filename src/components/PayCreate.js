import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
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
          <FormControl fullWidth style={{ marginBottom: "1rem" }}>
            <InputLabel htmlFor="pay">얼마에요?</InputLabel>
            <Input
              id="pay"
              type="number"
              style={{ fontSize: "1.5rem" }}
              value={this.state.pay}
              name="pay"
              onChange={this.onChange}
              startAdornment={
                <InputAdornment position="start">￦</InputAdornment>
              }
            />
          </FormControl>

          <FormControl component="fieldset" fullWidth>
            <FormLabel id="누가냄" component="legend">
              누가냄?
            </FormLabel>
            <Select
              style={{ fontSize: "1.5rem" }}
              labelId="누가냄"
              name="payer"
              id="demo-simple-select"
              value={this.state.payer}
              onChange={this.onChange}
            >
              <MenuItem value="김루이">김루이</MenuItem>
              <MenuItem value="일승이">일승이</MenuItem>
            </Select>
          </FormControl>

          <FormControl component="fieldset" fullWidth>
            <FormLabel id="payType" component="legend">
              어케냄?
            </FormLabel>
            <RadioGroup
              row
              aria-label="payType"
              name="payType"
              value={this.state.payType}
              onChange={this.onChange}
            >
              <FormControlLabel
                value="N빵"
                control={<Radio color="primary" />}
                label="N빵"
              />
              <FormControlLabel
                value="제각각"
                control={<Radio color="primary" />}
                label="제각각"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default PayCreate;
