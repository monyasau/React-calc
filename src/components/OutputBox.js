export default function OutputBox({ inputedCalculationQuery, result }) {
  return (
    <div className="border-1 border border-dark my-3 px-2 py-3 rounded-3" >

    <div className="mw-100 overflow-hidden border-0  py-1 rounded-3 output-box ">{ inputedCalculationQuery }</div>
    <div className="h3 rtl  w-100 hidden-scroll m-0">{result}</div>
    </div>
  );
}
