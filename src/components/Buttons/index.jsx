import "./style.css";

export default function Button({
  children,
  danger,
  setInputField,
  inputField,
}) {
  function handleClickClear(number) {
    if (number === "C") {
      setInputField("");
    } else {
      setInputField(inputField + number);
    }

    if(number === "="){
      setInputField(eval(inputField));
    }
  }
  return (
    <div
      className={"btn btn-primary" + (danger ? " btn-danger" : "")}
      onClick={() => handleClickClear(children)}
    >
      {children}
    </div>
  );
}
