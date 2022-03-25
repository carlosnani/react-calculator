import "./style.css";

export default function Button({
  children,
  red,
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
      className={"btn btn-calc" + (red ? " btn-red" : "")}
      onClick={() => handleClickClear(children)}
    >
      {children}
    </div>
  );
}
