import {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import InputType from './InputType/InputType'



function App() {
  // Setting Input values
  const [inputvalue, newInputValue] = useState({
    value: '',
  });

  const [answer, setAnswer]= useState(null);

  const [prime, setPrime] = useState(false);

  //Global declaration
    var answersyntax = null;
    


  //ALL THE FUNCTIONS

  //Onchange
  function onChangeHandler(e) {
      e.preventDefault();
      var newInput = e.target.value;
      onSubmitHandler(newInput)
      newInputValue({
          value: newInput,
        });
        
    }  
  
  //Function to check for odd and even Numbers
  function onSubmitHandler(newInput) {
      if (newInput % 2 === 1) {
          setAnswer(true);
      } else if(newInput === ''){
        setAnswer(null);
      } else {
          setAnswer(false); 
      }

    CheckPrimeNumber(newInput);
    //RESET ANSWER TO answersyntax variable
    //setanswer(answersyntax);
  }


  //Function to check Prime Number
  function CheckPrimeNumber(newInput) {
    const number = newInput;
    let isPrime = true;
    // check if number is equal to 1
    if (number === 1) {
      setPrime(false);
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          setPrime(false);
          break;
        }
      }
      if (isPrime) {
          setPrime(true);
        
      } else {
          setPrime(false);
      }
    }

    // check if number is less than 1
    else {
      setPrime(false);
    }
  }
  //JSX functions
  return (
    <div className="App">
      <h3>Input Type</h3>
      <UserInput value={inputvalue.value} change={onChangeHandler} />
      <InputType answer={answer} prime={prime} />
    </div>
  );
}



export default App;
