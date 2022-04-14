import React, { Component } from "react";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import OutputBox from "../components/OutputBox";
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      inputedCalculationQuery: "",
      lastInput: "",
      answer: "0",
    };
  }

  inputFilter = (event) => {
    // we recieve the keyboard input as a parameter
    if (!(event.key === "") && this.state.inputedCalculationQuery === "") {
      //we check if the calculator state is empty
      let unvreifiedInput = !/[a-zA-Z]/.test(event.key);
      // we check if the input is not a letter
      if (unvreifiedInput === true) {
        let verifiedInput = event.key;
        // and we update the state if its not a letter
        this.setState({
          inputedCalculationQuery: verifiedInput,
          // lastInput: "lanre".split(""),
        });
      }
    }
    //we check whether the input is either delete or backspace
    else if (
      !(this.state.inputedCalculationQuery === "") &&
      (event.keyCode === 8 || event.keyCode === 46)
    ) {
      this.handleBackspace(); //run function handleBackspace
    }//we check if the else if (
      !(this.state.inputedCalculationQuery === "") &&
      event.keyCode === 13
    ) {
      let evalResult = eval(this.state.inputedCalculationQuery);
      this.setState({
        answer: evalResult,
        inputedCalculationQuery: evalResult,
      });
      // console.log(evalResult);
      // let log = {

      // }
    } else if (!(this.state.inputedCalculationQuery === "")) {
      let unvreifiedInput = !/[a-zA-Z]/.test(event.key);
      if (unvreifiedInput === true) {
        let verifiedInput = event.key;
        this.setState({
          inputedCalculationQuery:
            this.state.inputedCalculationQuery + verifiedInput,
          lastInput: verifiedInput,
        });
      }
    }
  };
  keypressHandler = (event) => {
    if (this.state.inputedCalculationQuery === "") {
      this.setState({ inputedCalculationQuery: event.key });
    } else if (!(this.state.inputedCalculationQuery === "")) {
      console.log("first val not empty");
    }
    // this.setState({ answer: event.key});
    // this.setState({ lastInput: event.key});
    // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
  };
  handleBackspace = () => {
    let queriesToArray = this.state.inputedCalculationQuery.split("");
    queriesToArray.pop();
    queriesToArray = queriesToArray.join("");
    //  console.log(queriesToArray);
    this.setState({
      // inputedCalculationQuery: this.state.inputedCalculationQuery.replace(this.state.lastInput, ""),
      inputedCalculationQuery: queriesToArray,
    });
  };
  componentDidMount() {
    const { inputFilter } = this;
    document.addEventListener("keyup", (event) => {
      inputFilter(event);
    });
  }

  render() {
    let handleC = () => {
      this.setState({
        inputedCalculationQuery: "",
        lastInput: "",
        answer: "0",
      });
    };

    let handleOperatorClick = (e) => {
      let value = e.target.getAttribute("id");
      if (!(this.state.inputedCalculationQuery === "") && value === "=") {
        let evalResult = eval(this.state.inputedCalculationQuery);
        this.setState({
          answer: evalResult,
          inputedCalculationQuery: evalResult,
        });
      } else if (!(this.state.inputedCalculationQuery === "")) {
        this.setState({
          inputedCalculationQuery: this.state.inputedCalculationQuery + value,
          lastInput: value,
        });
      }
    };
    let handleNumberClick = (e) => {
      // console.log(e);
      let value = e.target.getAttribute("id");
      if (value === ".") {
        if (this.state.inputedCalculationQuery === "") {
          this.setState({
            // inputedCalculationQuery: this.state.inputedCalculationQuery + ".0",
            inputedCalculationQuery: "0" + value,
            lastInput: value,
          });
        } else if (!(this.state.inputedCalculationQuery === "")) {
          this.setState({
            inputedCalculationQuery: this.state.inputedCalculationQuery + value,
            lastInput: value,
          });
        }
        // this.setState({
        //   inputedCalculationQuery: this.state.inputedCalculationQuery + value,
        //   lastInput: value,
        // });
      } else if (this.state.inputedCalculationQuery === "") {
        this.setState({
          inputedCalculationQuery: value,
          lastInput: value,
        });
      }
      // else if (!(this.state.inputedCalculationQuery === "") && (value === ".")) {
      //   console.log("tadaa");
      //   this.setState({
      //     inputedCalculationQuery: this.state.inputedCalculationQuery + value,
      //     lastInput: value,
      //   });
      // }
      else if (!(this.state.inputedCalculationQuery === "")) {
        this.setState({
          inputedCalculationQuery: this.state.inputedCalculationQuery + value,
          lastInput: value,
        });
      }
    };
    return (
      <>
        <div className=" container-fluid  border border-dark border-2 rounded-1 calc-body">
          <div className="output-cont">
            <OutputBox
              inputedCalculationQuery={this.state.inputedCalculationQuery}
              result={this.state.answer}
            />
          </div>
          <div className="btn-cont">
            <button
              className="clear-button rounded-3 fw-bold num-btn me-6  h6"
              title="Clear the calculator memory"
              onClick={handleC}
            >
              AC
            </button>
            <button
              className="clear-button rounded-3 fw-bold num-btn  ms-6 h6"
              title="Delete the last input"
              onClick={this.handleBackspace}
            >
              &#8656; DEL
            </button>
          </div>
          <div className=" btn-cont ">
            <NumberButton digit={"9"} onClick={handleNumberClick} />
            <NumberButton onClick={handleNumberClick} digit={"8"} />
            <NumberButton digit={"7"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"/"}
              value={"÷"}
            />
          </div>
          <div className=" btn-cont ">
            <NumberButton digit={"6"} onClick={handleNumberClick} />
            <NumberButton digit={"5"} onClick={handleNumberClick} />
            <NumberButton digit={"4"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"-"}
              value={"-"}
            />
            <NumberButton digit={"3"} onClick={handleNumberClick} />
            <NumberButton digit={"2"} onClick={handleNumberClick} />
            <NumberButton digit={"1"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"+"}
              value={"+"}
            />

            <NumberButton digit={"."} onClick={handleNumberClick} />
            <NumberButton digit={"0"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"*"}
              value={"×"}
            />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"="}
              value={"="}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
