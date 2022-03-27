export default function NumberButton( { handleNumberClick, digit, id } ) {
  

  return (
    <>
      <button
        id={id}
        onClick={handleNumberClick("ss")}
        className="bg-light rounded-3 fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
