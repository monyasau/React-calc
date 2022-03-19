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
            className="border-2 my-3 p-3 py-5 w-100 input"
          />
          <div className=" btn-cont ">
            <NumberButton digit={"9"} />
            <NumberButton digit={"8"} />
            <NumberButton digit={"7"} />
            <OperatorButton value={"/"} />
          </div>
          <div className=" btn-cont ">
            <NumberButton digit={"6"} />
            <NumberButton digit={"5"} />
            <NumberButton digit={"4"} />
            <OperatorButton value={"-"} />
            <NumberButton digit={"3"} />
            <NumberButton digit={"2"} />
            <NumberButton digit={"1"} />
            <OperatorButton value={"+"} />
            <OperatorButton value={"."} />
            <NumberButton digit={"0"} />
            <OperatorButton value={"X"} />
            <OperatorButton value={"="} />
          </div>
        </div>
      </div>
    </>
  );
}
