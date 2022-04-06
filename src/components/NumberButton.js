export default function NumberButton( { inputFilter, digit, id } ) {
  

  return (
    <>
      <button
        id={id}
        onClick={inputFilter}
        className="bg-light rounded-3 fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
