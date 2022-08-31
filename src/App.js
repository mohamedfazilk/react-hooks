import React from "react";
import data from "./components/data";
import AnimalCard from "./components/Animalcard/AnimalCard";




function App() {

  return (
    <div className="wrapper">
      {data.map((animal) => {
        return (
          <AnimalCard
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            size={animal.size}
            scientificName ={animal.scientificName} />
        )
      })}


    </div>
  );
}

export default App;
