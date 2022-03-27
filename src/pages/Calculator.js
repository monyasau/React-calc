import React, { Component } from "react";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import OutputBox from "../components/OutputBox";
class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      firstVal: "",
      secVal: "",
      lastInput: "",
      answer: "0",
    };
  }
  // componentDidMount() {}
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
      lastInput: "",
    });
  };

  handleNumberClick = (digit) => {
    console.log(digit);
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
            <button
              className="clear-button rounded-3 fw-bold num-btn me-6  h6"
              title="Clear the calculator memory"
              onClick={this.handleAC}
            >
              AC
            </button>
            <button
              className="clear-button rounded-3 fw-bold num-btn  ms-6 h6"
              title="Clear the calculator screen"
              onClick={this.handleCE}
            >
              CE
            </button>
          </div>
          <div className=" btn-cont ">
            <NumberButton
              key={"nine"}
              digit={"9"}
              handleNumberClick={this.handleNumberClick}
            />
            <NumberButton
              key={"eight"}
              handleNumberClick={this.handleNumberClick}
              digit={"8"}
            />
            <NumberButton
              key={"seven"}
              digit={"7"}
              handleNumberClick={this.handleNumberClick}
            />
            <OperatorButton value={"÷"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton
              key={"six"}
              digit={"6"}
              handleNumberClick={this.handleNumberClick}
            />
            <NumberButton
              key={"five"}
              digit={"5"}
              handleNumberClick={this.handleNumberClick}
            />
            <NumberButton
              key={"four"}
              digit={"4"}
              handleNumberClick={this.handleNumberClick}
            />
            <OperatorButton value={"-"} />
            <NumberButton
              key={"three"}
              digit={"3"}
              handleNumberClick={this.handleNumberClick}
            />
            <NumberButton
              key={"two"}
              digit={"2"}
              handleNumberClick={this.handleNumberClick}
            />
            <NumberButton
              key={"one"}
              digit={"1"}
              handleNumberClick={this.handleNumberClick}
            />
            <OperatorButton value={"+"} />
            <OperatorButton value={"."} />
            <NumberButton
              key={"0"}
              digit={"0"}
              handleNumberClick={this.handleNumberClick}
            />
            <OperatorButton value={"X"} />
            <OperatorButton value={"="} />
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
