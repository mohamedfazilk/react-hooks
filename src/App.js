import React from "react";
import data from "./components/data";
import AnimalCard from "./components/Animalcard/AnimalCard";

function App() {
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n');
 alert(alertInformation)

  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal)=>{
        return(
          <AnimalCard key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName} 
          size={animal.size}
          diet={animal.diet}/>
        )

      })}
    </div>
  );
}

export default App;
