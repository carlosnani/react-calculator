import {useState} from 'react'
import Button from "../Buttons";

import "./style.css";

export default function Content() {

  const [inputField, setInputField] = useState("");  

  console.log(inputField)

  return (
    <div className="container">

      <div className="base ">

      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-5">
          <h1 className="text-center">Calculator with React</h1>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="display">
            <input type="text" value={inputField} onChange={() => setInputField(inputField)}/>
            <Button danger="true" setInputField={setInputField} inputField={inputField}>C</Button>          
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>7</Button>
            <Button setInputField={setInputField} inputField={inputField}>8</Button>
            <Button setInputField={setInputField} inputField={inputField}>9</Button>
            <Button setInputField={setInputField} inputField={inputField} danger="true">+</Button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>4</Button>
            <Button setInputField={setInputField} inputField={inputField}>5</Button>
            <Button setInputField={setInputField} inputField={inputField}>6</Button>
            <Button setInputField={setInputField} inputField={inputField} danger="true">-</Button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>1</Button>
            <Button setInputField={setInputField} inputField={inputField}>2</Button>
            <Button setInputField={setInputField} inputField={inputField}>3</Button>
            <Button setInputField={setInputField} inputField={inputField} danger="true">/</Button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField} danger="true">.</Button>
            <Button setInputField={setInputField} inputField={inputField}>0</Button>
            <Button setInputField={setInputField} inputField={inputField} danger="true">=</Button>
            <Button setInputField={setInputField} inputField={inputField} danger="true">*</Button>
          </div>
        </div>
      </div>

      </div>

    </div>
  );
}
