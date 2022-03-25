import {useState} from 'react'
import Button from "../Buttons";

import "./style.css";

export default function Content() {

  const [inputField, setInputField] = useState("");  


  return (
    <>
    <div className="title-box">
      <h1 className="title-box">Calculator with React</h1>
    </div>

    <div className="base">
      <div className="content">

        <div >
          <div className="display">
            <input type="text" value={inputField} onChange={() => setInputField(inputField)}/>
            <Button red="true" setInputField={setInputField} inputField={inputField}>C</Button>          
          </div>
        </div>
 
        <div>
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>7</Button>
            <Button setInputField={setInputField} inputField={inputField}>8</Button>
            <Button setInputField={setInputField} inputField={inputField}>9</Button>
            <Button setInputField={setInputField} inputField={inputField} red="true">+</Button>
          </div>
        </div>
 
        <div >
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>4</Button>
            <Button setInputField={setInputField} inputField={inputField}>5</Button>
            <Button setInputField={setInputField} inputField={inputField}>6</Button>
            <Button setInputField={setInputField} inputField={inputField} red="true">-</Button>
          </div>
        </div>
 
        <div >
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField}>1</Button>
            <Button setInputField={setInputField} inputField={inputField}>2</Button>
            <Button setInputField={setInputField} inputField={inputField}>3</Button>
            <Button setInputField={setInputField} inputField={inputField} red="true">/</Button>
          </div>
        </div>
 
        <div >
          <div className="buttons">
            <Button setInputField={setInputField} inputField={inputField} red="true">.</Button>
            <Button setInputField={setInputField} inputField={inputField}>0</Button>
            <Button setInputField={setInputField} inputField={inputField} red="true">=</Button>
            <Button setInputField={setInputField} inputField={inputField} red="true">*</Button>
          </div>
 
      </div>
      </div>     
    </div>
    </>
  );
}
