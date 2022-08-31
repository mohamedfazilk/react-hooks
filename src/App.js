import React from "react";
import data from "./components/data";
import AnimalCard from "./components/Animalcard/AnimalCard";


const showAdditional = (additional) => {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
}

function App() {
  
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => {
        return (
          <AnimalCard key={animal.name}
          additional={animal.additional}

            name={animal.name}
            scientificName={animal.scientificName}
           
            diet={animal.diet} 
             showAdditional={showAdditional}
             size={animal.size}/>
             
        )

      })}
    </div>
  );
}

export default App;
