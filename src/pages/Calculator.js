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

  inputFilter = (event) => {
    if (!(event.key === "")) {
      let unvreifiedInput = !/[a-zA-Z]/.test(event.key);
      // console.log(unvreifiedInput);
      if (unvreifiedInput === true) {
        let verifiedInput = event.key;
        this.setState({
          firstVal: verifiedInput,
        })
      } else if (!(this.state.firstVal === "")) {
        console.log("too bad");
      }
      // let isCharacterANumber = (currentInput) => {
      //   return !(/[a-zA-Z]/).test(currentInput)
      // }
    } else {
      console.log("empty");
    }
  };
  keypressHandler = (event) => {
    if (this.state.firstVal === "") {
      this.setState({ firstVal: event.key });
    } else if (!(this.state.firstVal === "")){
      console.log("first val not empty");
    }
    // this.setState({ answer: event.key});
    // this.setState({ lastInput: event.key});
    // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
  };
  componentDidMount() {
    const { inputFilter } = this;
    document.addEventListener("keyup", (event) => {
      inputFilter(event);
    });
  }

  render() {
    let handleAC = () => {
      this.setState({
        firstVal: "",
        secVal: "",
        lastInput: "",
        answer: "0",
      });
    };

    let handleCE = () => {
      this.setState({
        lastInput: "",
      });
    };

    let handleNumberClick = (id) => {
      // this.setState({ lastInput: digit });
      console.log(id);
    };
    return (
      <>
        <div className=" container-fluid  border border-dark border-2 rounded-1 calc-body">
          <div className="output-cont">
            <OutputBox
              firstVal={this.state.firstVal}
              secVal={this.state.secVal}
              result={this.state.answer}
            />
          </div>
          <div className="btn-cont">
            <button
              className="clear-button rounded-3 fw-bold num-btn me-6  h6"
              title="Clear the calculator memory"
              onClick={handleAC}
            >
              AC
            </button>
            <button
              className="clear-button rounded-3 fw-bold num-btn  ms-6 h6"
              title="Clear the calculator screen"
              onClick={handleCE}
            >
              CE
            </button>
          </div>
          <div className=" btn-cont ">
            <NumberButton
              key={"nine"}
              digit={"9"}
              handleNumberClick={handleNumberClick}
            />
            <NumberButton
              key={"eight"}
              handleNumberClick={handleNumberClick}
              digit={"8"}
            />
            <NumberButton
              key={"seven"}
              digit={"7"}
              handleNumberClick={handleNumberClick}
            />
            <OperatorButton value={"÷"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton
              key={"six"}
              digit={"6"}
              handleNumberClick={handleNumberClick}
            />
            <NumberButton
              key={"five"}
              digit={"5"}
              handleNumberClick={handleNumberClick}
            />
            <NumberButton
              key={"four"}
              digit={"4"}
              handleNumberClick={handleNumberClick}
            />
            <OperatorButton value={"-"} />
            <NumberButton
              key={"three"}
              digit={"3"}
              handleNumberClick={handleNumberClick}
            />
            <NumberButton
              key={"two"}
              digit={"2"}
              handleNumberClick={handleNumberClick}
            />
            <NumberButton
              key={"one"}
              digit={"1"}
              handleNumberClick={handleNumberClick}
            />
            <OperatorButton value={"+"} />
            <OperatorButton value={"."} />
            <NumberButton
              key={"0"}
              digit={"0"}
              handleNumberClick={handleNumberClick}
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
