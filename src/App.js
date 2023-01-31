import './App.css';
import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2 , setNum2] = useState(0);
  const [result, setResult] = useState("");
  const [op, setOp] = useState("");
  const [check, setCheck] = useState(false);

  const buttonClick = (e) =>{
   if(check === false){
    setNum1(num1 + e.target.textContent);
   } 
   
   else{
    setNum2(num2 + e.target.textContent);
   }
   setResult(result + e.target.textContent);
  }

  const opBtn = (e) => {
   setOp(e.target.textContent);
   setResult(result + e.target.textContent);
   setCheck(true);
  }

  function handleClear(){
    setNum1(0);
    setNum2(0);
    setOp("");
    setResult("");
    setCheck(false);
  }

  function handleResultClick(){
    console.log(num1);
    console.log(num2);
    switch(op){
      case "+":
        console.log("add");
        setResult(parseInt(num1) + parseInt(num2));
        break;

      case "-":
        console.log("substract");
        setResult(parseInt(num1) - parseInt(num2));
        break;
      
      case "*":
        console.log("multipy");
        setResult(parseInt(num1) * parseInt(num2));
        break;

      case "/":
        console.log("divide");
        setResult(parseInt(num1) / parseInt(num2) );
        break;

      default:  
    }
  }

  return (
  <div>
    <div>
      <input value={result}></input>
    </div>
    <div>
      <button onClick={buttonClick}>0</button>
      <button onClick={buttonClick}>1</button>
      <button onClick={buttonClick}>2</button>
      <button onClick={opBtn}>+</button>
    </div>
    <div>
    <button onClick={buttonClick}>3</button>
    <button onClick={buttonClick}>4</button>
    <button onClick={buttonClick}>5</button>
    <button onClick={opBtn}>-</button>
    </div>
    <div>
    <button onClick={buttonClick}>6</button>
    <button onClick={buttonClick}>7</button>
    <button onClick={buttonClick}>8</button>
    <button onClick={opBtn}>*</button>
    </div>
    <div>
    <button onClick={buttonClick}>9</button>
    <button onClick={opBtn}>/</button>
    <button onClick={handleResultClick}>=</button>
    <button onClick={handleClear}>AC</button>
    </div>
  </div>  
  );
}

export default App;
