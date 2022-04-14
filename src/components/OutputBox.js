export default function OutputBox({ inputedCalculationQuery, result }) {
  return (
    <div className="border-2 border border-secondary my-3 mx-45 px-2 py-3 w-85 rounded-3" >

    <div className="mw-100 overflow-hidden border-0  py-1 rounded-3 output-box ">{ inputedCalculationQuery }</div>
    <div className="h3 rtl  w-100 rounded-3  hidden-scroll m-0">{result}</div>
    </div>
  );
}
