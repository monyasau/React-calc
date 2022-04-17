export default function NumberButton( { onClick, digit, id } ) {
  

  return (
    <>
      <button
        id={digit}
        onClick={onClick}
        className="bg-light rounded-3 border-1-5 col col-md-3 num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
