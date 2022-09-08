import React from 'react';
import { AppContext } from "../../context/AppContext";
import './InputData.css';


function InputData() {
  
  const {inputData,saveData} = React.useContext(AppContext);

  const handleInputChange = (event) => {
    saveData(event.target.value);
  };


  return (

    <input 
      disabled
      type="text" 
      value={inputData}
      className="InputData" 
      placeholder="0" 
      onChange={handleInputChange}
    />

  );
}

export {InputData};