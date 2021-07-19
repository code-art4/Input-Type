import react,{useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import InputType from './InputType/InputType'



function App() {
  // Setting Input values
  const [inputvalue, newInputValue] = useState({
    value: null,
  });

  const [answer, setanswer] = useState('No value has been inputted');
  
  //Global declaration
    var value = inputvalue.value;
    var answersyntax = null;
    


  //ALL THE FUNCTIONS

  //Onchange
  function onChangeHandler(e) {
      var newInput = e.target.value;
      onSubmitHandler(newInput)
      newInputValue({
          value: newInput,
        });
        
    }  
  
  //Function to check for odd and even Numbers
  function onSubmitHandler(newInput) {
    if (newInput % 2 === 1) {
      console.log("Odd number");
        answersyntax = newInput + " is an odd number";
    } else {
        answersyntax = newInput + " is an even number";
        console.log("Even number");
    }
    CheckPrimeNumber(newInput);
    //RESET ANSWER TO answersyntax variable
    setanswer(answersyntax);
  }


  //Function to check Prime Number
  function CheckPrimeNumber(newInput) {
    const number = newInput;
    let isPrime = true;
    // check if number is equal to 1
    if (number === 1) {
      console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
          answersyntax += " and a prime number";
        console.log(`${number} is a prime number`);
        
      } else {
          answersyntax += " but not a prime number";
        console.log(`${number} is a not prime number`);
      }
    }
    // check if number is less than 1
    else {
      console.log("The number is not a prime number.");
    }
  }

  //JSX functions
  return (
    <div className="App">
      <h3>Input Type</h3>
      <UserInput value={inputvalue.value} change={onChangeHandler} />
      <InputType answer={answer} />
    </div>
  );
}



export default App;