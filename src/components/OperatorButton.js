export default function OperatorButton({ onClick, operatorKey, id, value }) {
  return (
    <>
      <button
        id={operatorKey}
        onClick={onClick}
        className="bg-light-grey rounded-3 fw-bold border-1-5 col col-md-3 num-btn"
      >
        {value}
      </button>
    </>
  );
}
