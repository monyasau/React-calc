export default function NumberButton(props) {
  const { changeName, digit, id } = props;
  return (
    <>
      <button
        id={id}
        onClick={changeName}
        className="bg-light fw-bold num-btn h6"
      >
        {digit}
      </button>
    </>
  );
}
