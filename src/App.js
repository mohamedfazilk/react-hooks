import React from "react";
import data from "./components/data";
import AnimalCard from "./components/Animalcard/AnimalCard";

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal)=>{
        return(
          <AnimalCard key={animal.name}/>
        )

      })}
    </div>
  );
}

export default App;
