export default function NumberButton(props) {
  const { clickedButton, digit, id } = props;
  return (
    <>
      <button
        id={id}
        onClick={clickedButton}
        className="bg-light rounded-3 fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
