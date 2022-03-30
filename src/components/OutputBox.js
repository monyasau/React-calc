export default function OutputBox({ firstVal, secVal, lastInput, result }) {
  return (
    <div className="border-2 border border-secondary my-3 mx-45 px-2 py-3 w-85 rounded-3" >

    <div className="border-0 rtl py-1 w-100 rounded-3">{firstVal + secVal + lastInput}</div>
    <input
      type="text"
      value={( result)}
      readOnly
      name=""
      id="output"
      className="border-0 rtl py-1 w-100 rounded-3"
    />
    </div>
  );
}
