import React, { Component } from "react";
import styled from "styled-components";

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

const CalculatorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CalculatorInput = styled.input`
  width: 200px;
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  &:focus {
    border: 1px solid blue;
  }
`;

const CalculatorSelected = styled.select`
  background: white;
  color: black;
  width: 60px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
`;

const CalculatorButton = styled.button`
  width: 80px;
  height: 40px;
  background: ${({ color }) => (color ? color : "white")};
  color: white;
  border: 1px solid black;
`;

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
        <CalculatorWrapper>
          <CalculatorInput
            type="number"
            value={val1}
            name={VAL_NAME_1}
            onChange={this.handleChange}
          />
          <br />
          <CalculatorSelected name="operator" onChange={this.handleChange}>
            {OPERATOR.map((op, index) => (
              <option key={index} value={op}>
                {op}
              </option>
            ))}
          </CalculatorSelected>
          <br />
          <CalculatorInput
            type="number"
            value={val2}
            name={VAL_NAME_2}
            onChange={this.handleChange}
          />
          <br />
          <CalculatorButton color="#516cf0" type="submit" onClick={this.setRes}>
            Result
          </CalculatorButton>
        </CalculatorWrapper>
        <p>Result : {res}</p>
      </>
    );
  }
}

export default Calculator;
