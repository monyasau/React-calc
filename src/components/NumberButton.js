export default function NumberButton( { onClick, digit, id } ) {
  

  return (
    <>
      <button
        id={digit}
        onClick={onClick}
        className="bg-light rounded-3 fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
