import react from "react";
import React, { Component } from "react";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import OutputBox from "../components/OutputBox";
class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVal: "",
      secVal: "",
      result: "0",
    };
  }

  render() {
    function numberButtonClicked () {
      console.log("ddd");
    };
    return (
      <>
        <div className=" container-fluid  border border-dark border-2 rounded-1 calc-body">
          <OutputBox
            firstVal={this.state.firstVal}
            secVal={this.state.secVal}
            result={this.state.result}
          />
          <div className=" btn-cont ">
            <NumberButton id={"nine"} digit={"9"} />
            <NumberButton id={"eight"} digit={"8"} />
            <NumberButton id={"seven"} digit={"7"} />
            <OperatorButton value={"÷"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton id={"six"} digit={"6"} />
            <NumberButton id={"five"} digit={"5"} />
            <NumberButton id={"four"} digit={"4"} />
            <OperatorButton value={"-"} />
            <NumberButton id={"three"} digit={"3"} />
            <NumberButton id={"two"} digit={"2"} />
            <NumberButton id={"one"} digit={"1"} />
            <OperatorButton value={"+"} />
            <OperatorButton value={"."} />
            <NumberButton id={"0"} digit={"0"} />
            <OperatorButton value={"X"} />
            <OperatorButton value={"="} />
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
