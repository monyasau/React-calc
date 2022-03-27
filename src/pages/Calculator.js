import react from "react";
import React, { Component } from "react";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import OutputBox from "../components/OutputBox";
class Calculator extends react.Component {
  state = {
    firstVal: "",
    secVal: "",
    lastInput: "",
    answer: "0",
  };

  handleAC = () => {
    this.setState({
      firstVal: "",
      secVal: "",
      lastInput: "",
      answer: "0",
    });
  };

  handleCE = () => {
    this.setState({
      calcInput: "",
    });
  };

  render() {
    return (
      <>
        <div className=" container-fluid  border border-dark border-2 rounded-1 calc-body">
          <div className="output-cont">
            <OutputBox
              firstVal={this.state.firstVal}
              secVal={this.state.secVal}
              result={this.state.result}
            />
          </div>
          <div className="btn-cont">
            <button className="bg- fw-bold num-btn mx-5  h6">AC</button>
            <button className="bg-light fw-bold num-btn  mx-5 h6">CE</button>
          </div>
          <div className=" btn-cont ">
            <NumberButton
              key={"nine"}
              clickedButton={this.handleAC}
              digit={"9"}
            />
            <NumberButton key={"eight"} digit={"8"} />
            <NumberButton key={"seven"} digit={"7"} />
            <OperatorButton value={"÷"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton key={"six"} digit={"6"} />
            <NumberButton key={"five"} digit={"5"} />
            <NumberButton key={"four"} digit={"4"} />
            <OperatorButton value={"-"} />
            <NumberButton key={"three"} digit={"3"} />
            <NumberButton key={"two"} digit={"2"} />
            <NumberButton key={"one"} digit={"1"} />
            <OperatorButton value={"+"} />
            <OperatorButton value={"."} />
            <NumberButton key={"0"} digit={"0"} />
            <OperatorButton value={"X"} />
            <OperatorButton value={"="} />
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
