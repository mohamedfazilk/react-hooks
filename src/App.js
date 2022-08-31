import React from "react";
import data from "./components/data";
import AnimalCard from "./components/Animalcard/AnimalCard";
import Alert from "./components/Alert/Alert";
import './components/Alert/Alert.css'




function App() {

  return (
    <div className="wrapper">
     <Alert title="Items Not Added" type="error"></Alert>
     <div>Your items are out of stock.</div>
 
     


    </div>
  );
}

export default App;
