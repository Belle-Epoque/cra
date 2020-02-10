import React, { Component } from "react";

const VAL_NAME_1 = "val1";
const VAL_NAME_2 = "val2";
const OPERATOR_PLUS = "+";
const OPERATOR_MINUS = "-";
const OPERATOR_MULTIPLICATOR = "*";
const OPERATOR_DIVIDE = "/";
const OPERATOR_NAME = "operator";

const OPERATOR = [
  OPERATOR_PLUS,
  OPERATOR_MINUS,
  OPERATOR_MULTIPLICATOR,
  OPERATOR_DIVIDE
];

const getValue = ({ key, value }) => {
  switch (key) {
    case OPERATOR_NAME:
      return `${value}`;

    default:
      return parseFloat(value);
  }
};

class Calculator extends Component {
  state = {
    res: "",
    [VAL_NAME_1]: 0,
    [VAL_NAME_2]: 0,
    [OPERATOR_NAME]: OPERATOR_PLUS
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: getValue({ key: e.target.name, value: e.target.value })
    });
  };

  setRes = e => {
    e.preventDefault();
    const { val1, operator, val2 } = this.state;
    if (
      typeof val1 !== "number" ||
      typeof val2 !== "number" ||
      !OPERATOR.includes(operator)
    ) {
      return console.error("impossible");
    }
    const res = eval(`${val1}${operator}${val2}`);
    this.setState({ res });
  };

  render() {
    const { val1, val2, res } = this.state;
    return (
      <>
        <input
          type="number"
          value={val1}
          name={VAL_NAME_1}
          onChange={this.handleChange}
        />
        <br />
        <select name="operator" onChange={this.handleChange}>
          {OPERATOR.map((op, index) => (
            <option key={index} value={op}>
              {op}
            </option>
          ))}
        </select>
        <br />
        <input
          type="number"
          value={val2}
          name={VAL_NAME_2}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit" onClick={this.setRes}>
          Result
        </button>
        <br />
        <p>Result : {res}</p>
      </>
    );
  }
}

export default Calculator;
