import React from 'react';
import './App.css';
import { useState } from 'react';

function App(){

const [calc,setCalc] = useState("");
const [result,setResult]=useState("");

const ops=["+","-","*","/","."];

const updateCalc=(value)=>{
    setCalc(calc+value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
}

const calculate = () => {
  setCalc(eval(calc).toString());
}

const del = () =>{
  setCalc(calc.slice(0,-1));
}

const clear = () =>{
  setCalc('');
  setResult('');
}

const createDigits = () => {
  const digits = [];

  for (let i=1;i<10;i++){
    digits.push(
      <button 
      onClick={()=>updateCalc(i.toString())}
       key={i}>
        {i}
       </button>
    )
  }
  return digits;
}

  return(
    <div className='App'>
       <div className='Calculator'>
        <div className='result'>
          {result ? <span>({result})</span> : ""} 
          {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('/')}>/</button>          
          <button  onClick={del}>DEL</button>
        </div>
        <div className='btn'>
          {createDigits() }
          <button  onClick={()=>updateCalc('0')}>0</button>
          <button  onClick={()=>updateCalc('.')}>.</button>
          <button  onClick={calculate}>=</button>
        </div>
        <div className='clr'  onClick={clear}>
          <button>Clear All</button>
        </div>
       </div>
    </div>
  );
}

export default App;