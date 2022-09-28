import React from "react";
import "./style.css"
import { useState } from "react";

export default function NewComponent() {

    const [number, setNumber] = useState(0)
    function add(){
        return setNumber(number+1);
    }
    function sub(){

        if(number>0){
        return setNumber(number-1);
        }
        else{

            return setNumber(0);
        }

    }

    function reset(){
        return setNumber(0);

    }
  return (
    <React.Fragment>
        <div className="counter">
      <h1>{number}</h1>
      <button onClick={add}>+ </button>
      <button onClick={sub}>-</button>
      <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}
