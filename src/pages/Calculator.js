import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";

export default function Calculator() {
  return (
    <>
      <div className="">
        <div className=" container-fluid  border border-dark border-2 rounded-1 calc-body">
          <input
            type="text"
            readOnly
            name=""
            id="output"
            className="border-2 my-3 mx-4 p-3 py-5 w-85 input"
          />
          <div className=" btn-cont ">
            <NumberButton id={9} digit={"9"} />
            <NumberButton id={8} digit={"8"} />
            <NumberButton id={7} digit={"7"} />
            <OperatorButton value={"/"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton id={6} digit={"6"} />
            <NumberButton id={5} digit={"5"} />
            <NumberButton id={4} digit={"4"} />
            <OperatorButton value={"-"} />
            <NumberButton id={3} digit={"3"} />
            <NumberButton id={2} digit={"2"} />
            <NumberButton id={1} digit={"1"} />
            <OperatorButton value={"+"} />
            <OperatorButton  value={"."} />
            <NumberButton id={0} digit={"0"} />
            <OperatorButton value={"X"} />
            <OperatorButton value={"="} />
          </div>
        </div>
      </div>
    </>
  );
}
