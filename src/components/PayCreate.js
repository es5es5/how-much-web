import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import React, { Component } from "react";

import "./PayCreate.scss";
import { employee } from "../data/employee";

export class PayCreate extends Component {
  state = {
    pay: "0",
    payer: "",
    payType: "N빵",
    payFriends: [],
    employee: [],
  };
  componentDidMount() {
    this.setState({ payer: "김루이" });
    this.setState({
      employee: employee.map((item) => {
        return {
          ...item,
          checked: false,
        };
      }),
    });
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
  checkEmployee(id) {
    this.setState({
      employee: Object.assign(
        this.state.employee,
        (this.state.employee.filter(
          (item) => item.id === id
        )[0].checked = this.state.employee.filter((item) => item.id === id)[0]
          .checked
          ? false
          : true)
      ),
    });
  }
  render() {
    return (
      <div id="payCreate">
        <div className="form_wrap">
          {/* 얼마에요? */}
          <FormControl fullWidth style={{ marginBottom: "1rem" }}>
            <FormLabel id="pay" component="legend">
              얼마에요?
            </FormLabel>
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

          {/* 누가냄? */}
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

          {/* 어케냄? */}
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

          {/* 함께한 사람 */}
          <FormControl component="fieldset" fullWidth>
            <List>
              {this.state.employee.map((item) => {
                const labelId = `checkbox-list-label-${item.id}`;

                return (
                  <ListItem
                    key={item.id}
                    role={undefined}
                    dense
                    button
                    onClick={() => this.checkEmployee(item.id)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={item.checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${item.name}`} />
                  </ListItem>
                );
              })}
            </List>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default PayCreate;
