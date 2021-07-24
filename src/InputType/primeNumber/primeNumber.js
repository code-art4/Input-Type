import React from 'react';
import classes from './primeNumber.module.css';

function primeNumber(props) {
    let answer = "";
    if (props.prime) {
        answer = "Prime Number";
    }else{
        answer = "";
    }
    // console.log(props.prime);
    return (
        <div className={classes.primeNumber}>
            <p>{answer}</p>
        </div>
    )
}

export default primeNumber
