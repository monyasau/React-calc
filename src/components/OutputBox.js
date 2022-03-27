export default function OutputBox({ firstVal, secVal, result }) {
  return (
    <input
      type="text"
      value={(firstVal, secVal, result)}
      readOnly
      name=""
      id="output"
      className="border-2 my-3 mx-45 p-3 py-5 w-85 rounded-3"
    />
  );
}
