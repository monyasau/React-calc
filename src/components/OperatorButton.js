export default function OperatorButton({ onClick, operatorKey, id, value }) {
  return (
    <>
      <button
        id={operatorKey}
        onClick={onClick}
        className="bg-light-grey rounded-3 fw-bold num-btn"
      >
        {value}
      </button>
    </>
  );
}
