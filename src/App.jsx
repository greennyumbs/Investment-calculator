import React, { useState } from "react"
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualInvestment, setAnnualInvestment] = useState(1200)
  const [expectedReturn, setExpectedReturn] = useState(6)
  const [duration, setDuration] = useState(10)

  function handleChange(inputIdentifier, newValue) {
    switch (inputIdentifier) {
      case 'initialInvestment':
        setInitialInvestment(+newValue);  // The "+" sign converts the string to a number
        break;
      case 'annualInvestment':
        setAnnualInvestment(+newValue);
        break;
      case 'expectedReturn':
        setExpectedReturn(+newValue);
        break;
      case 'duration':
        setDuration(+newValue);
        break;
      default:
        // Handle unknown inputIdentifier
        break;
    }
  }

  const inputIsValid = duration >= 1

  return (
    <>
      <Header />
      <UserInput
        onChangeInput={handleChange}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
      {!inputIsValid && <p className='center'>Please enter a positive duration.</p>}
      {inputIsValid && <Results
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration} />
      }
    </>
  )
}

export default App
