export default function NumberButton({ numberButtonClicked, digit, id }) {
  return (
    <>
      <button
        id={id}
        onClick={numberButtonClicked}
        className="bg-light fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
