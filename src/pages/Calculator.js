import React, { Component } from "react";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import OutputBox from "../components/OutputBox";
export default class Calculator extends Component {
  constructor() {
    super();
    //super has to be present for "this" to work
    this.state = {
      inputedCalculationQuery: "",
      lastInput: "",
      answer: "0",
    };
  }

  inputFilter = (event) => {
    //recieve the keyboard input as a parameter
    if (event.key === ".") {
      //if the keyboard input is dot run the following
      if (this.state.inputedCalculationQuery === "") {
        this.setState({
          inputedCalculationQuery: "0" + event.key,
          lastInput: event.key,
        });
      } else if (!(this.state.inputedCalculationQuery === "")) {
        this.setState({
          inputedCalculationQuery:
            this.state.inputedCalculationQuery + event.key,
          lastInput: event.key,
        });
      }
    } else if (
      !(event.key === "") &&
      this.state.inputedCalculationQuery === ""
    ) {
      // check if the calculator state is empty
      let unvreifiedInput = !/[a-zA-Z]/.test(event.key);
      // check if the input is not a letter
      if (unvreifiedInput === true) {
        let verifiedInput = event.key;
        // and update the state if its not a letter
        this.setState({
          inputedCalculationQuery: verifiedInput,
        });
      }
    }
    //check whether the input is either delete or backspace
    else if (
      !(this.state.inputedCalculationQuery === "") &&
      (event.keyCode === 8 || event.keyCode === 46)
    ) {
      this.handleBackspace(); //run function handleBackspace
    } //check if the enter button is pressed
    else if (
      !(this.state.inputedCalculationQuery === "") &&
      event.keyCode === 13
    ) {
      // then solve the calculation
      let evalResult = eval(this.state.inputedCalculationQuery);
      // update the answer
      this.setState({
        answer: evalResult,
        inputedCalculationQuery: evalResult,
      });
    }
    // if the state is not empty add the current input to the state
    else if (!(this.state.inputedCalculationQuery === "")) {
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
    //when a button is pressed check if state is empty
    if (this.state.inputedCalculationQuery === "") {
      this.setState({ inputedCalculationQuery: event.key });
    } else if (!(this.state.inputedCalculationQuery === "")) {
    }
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
    // once the app is loaded successfully wait till the keyboard is pressed then run inputFilter
    document.addEventListener("keyup", (event) => {
      this.inputFilter(event);
    });
  }

  render() {
    let Clear = () => {
      // clear the state
      this.setState({
        inputedCalculationQuery: "",
        lastInput: "",
        answer: "0",
      });
    };

    let handleOperatorClick = (e) => {
      //recieve the click button as parameter
      let value = e.target.getAttribute("id");
      if (!(this.state.inputedCalculationQuery === "") && value === "=") {
        //when the equal button is pressed solve the calculation
        let evalResult = eval(this.state.inputedCalculationQuery);
        this.setState({
          answer: evalResult,
          inputedCalculationQuery: evalResult,
        });
      } else if (!(this.state.inputedCalculationQuery === "")) {
        //or if its an other operator add it to the calulation
        this.setState({
          inputedCalculationQuery: this.state.inputedCalculationQuery + value,
          lastInput: value,
        });
      }
    };
    let handleNumberClick = (e) => {
      // recieve the clicked button as a parameter
      let value = e.target.getAttribute("id");
      //if the clicked button is dot and its the first value
      if (value === ".") {
        if (this.state.inputedCalculationQuery === "") {
          this.setState({
            inputedCalculationQuery: "0" + value,
            lastInput: value,
          });
        } else if (!(this.state.inputedCalculationQuery === "")) {
          this.setState({
            inputedCalculationQuery: this.state.inputedCalculationQuery + value,
            lastInput: value,
          });
        }
      } else if (this.state.inputedCalculationQuery === "") {
        // if its the first input then set it to state
        this.setState({
          inputedCalculationQuery: value,
          lastInput: value,
        });
      } else if (!(this.state.inputedCalculationQuery === "")) {
        // if its not the first input then add it to state
        this.setState({
          inputedCalculationQuery: this.state.inputedCalculationQuery + value,
          lastInput: value,
        });
      }
    };
    return (
      <>
        <div className=" container-fluid  border border-dark border-1-5 rounded-1 calc-body">
          <div className="output-cont">
            <OutputBox
              inputedCalculationQuery={this.state.inputedCalculationQuery}
              result={this.state.answer}
            />
          </div>
          <div className=" btn-cont ac-del row">
            <button
              className="clear-button border-1-5 rounded-3 fw-bold  h6 me-auto col col-3"
              title="Clear the calculator memory"
              onClick={Clear}
            >
              AC
            </button>
            <button
              className="del-button border-1-5  rounded-3 fw-bold  h6  ms-auto col col-3"
              title="Delete the last input"
              onClick={this.handleBackspace}
            >
              &#8656; DEL
            </button>
          </div>
          <div className=" btn-cont row ">
            <NumberButton digit={"9"} onClick={handleNumberClick} />
            <NumberButton onClick={handleNumberClick} digit={"8"} />
            <NumberButton digit={"7"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"/"}
              value={"÷"}
            />
          </div>
          <div className=" btn-cont row">
            <NumberButton digit={"6"} onClick={handleNumberClick} />
            <NumberButton digit={"5"} onClick={handleNumberClick} />
            <NumberButton digit={"4"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"-"}
              value={"-"}
            />
          </div>
          <div className=" btn-cont row">
            <NumberButton digit={"3"} onClick={handleNumberClick} />
            <NumberButton digit={"2"} onClick={handleNumberClick} />
            <NumberButton digit={"1"} onClick={handleNumberClick} />
            <OperatorButton
              onClick={handleOperatorClick}
              operatorKey={"+"}
              value={"+"}
            />
          </div>
          <div className=" btn-cont row">
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
        <div className="border border-1 p-1 w-fc mx-auto mt-4">
          Keyboard input is allowed
        </div>
 
      </>
    );
  }
}
