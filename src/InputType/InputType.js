import React from "react";
import PrimeNumber from "./primeNumber/primeNumber";
import classes from './InputType.module.css'

function InputType(props){
    if(props.answer){
        var numberType = "Odd number";
    }else if(props.answer === null){
        numberType = "";
    }else{
        numberType = "Even number"
    }
    return (
      <div className={classes.InputType}>
        <p className={classes.Type}>{numberType}</p>
        {props.prime ? 
        <PrimeNumber prime={props.prime}/>
        :null
        }
      </div>
    );
}

export default InputType;