import Numberbtn from "./Numberbtn";
import Operator from "./Operators";
import "./bootstrap.min.css";
import "./style.css";

function Calc() {
  return (
    <>
      <div className="">
        <div className=" calc-body  container-fluid border border-dark border-2 rounded-1">
          <input
            type="text"
            readOnly
            name=""
            id="output"
            className="input w-100 py-5 my-3 border-2 p-3"
          />
          <div className=" btn-cont ">
            <Numberbtn digit={"9"} />
            <Numberbtn digit={"8"} />
            <Numberbtn digit={"7"} />
            <Operator value={"/"} />
          </div>
          <div className=" btn-cont ">
            <Numberbtn digit={"6"} />
            <Numberbtn digit={"5"} />
            <Numberbtn digit={"4"} />
            <Operator value={"-"} />
            <Numberbtn digit={"3"} />
            <Numberbtn digit={"2"} />
            <Numberbtn digit={"1"} />
            <Operator value={"+"} />
            <Operator value={"."} />
            <Numberbtn digit={"0"} />
            <Operator value={"X"} />
            <Operator value={"="} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
