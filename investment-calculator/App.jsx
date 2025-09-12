import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";



function App() {
  const [inputData, setInputData] = useState({
    iniIvestment: 10000,
    anuInvestment: 1200,
    expReturn: 6,
    duration: 10
  });
  const isInputValid = (inputData.duration >= 1);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: + value
    }));
  }


  return (
    <>
      <Header />
      <UserInput inputData={inputData} handleInputChange={handleInputChange} />
      {isInputValid ? <Results inputData={inputData} /> : <p className="center">Please enter a duration greater then zero</p>}
    </>

    // result table 
  )
}

export default App
