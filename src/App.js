import React from 'react';
import logo from './logo.svg';
import './Lays.css';
import Nav from './component/Nav.js';
import styled from 'styled-components'; 

/*function App() {
  return (
    <Element>
    <div >
      <Nav></Nav>
      <img src='/LVDG.jpg'></img>
      </div>
    </Element>
  );
}

const Element = styled.div`
  .App {
    background-color: red;
  }
`;*/



/*// Répertorier tout les plats
const MealSelector = () => {
const [state, setState] = React.useState({
meals: [
{ name: "Pâtes carbonara", price: 10, image: "/pasta.jpg", type: "italien" },
{ name: "Steak frites", price: 15, image: "/steak.jpg", type: "français" },
{ name: "Salade César", price: 8, image: "/salad.jpg", type: "français" },
{ name: "Sushi", price: 12, image: "/sushi.jpg", type: "japonais" },
{ name: "Pad Thai", price: 10, image: "/padthai.jpg", type: "thaïlandais", ingredient: ["tomate", "riz", "oeuf"] },
{ name: "Ramen", price: 5, type:"japonais"}
],
selectedType: "",
selectedPrice: "",
});

const handleTypeChange = (e) => {
setState({ ...state, selectedType: e.target.value });
};

const handlePriceChange = (e) => {
setState({ ...state, selectedPrice: e.target.value });
};

const generateMeal = () => {
let selectedMeals = state.meals;

if (state.selectedType) {
  selectedMeals = selectedMeals.filter((meal) => meal.type === state.selectedType);
}

if (state.selectedPrice) {
  selectedMeals = selectedMeals.filter(
    (meal) => meal.price <= parseInt(state.selectedPrice)
  );
}

if (selectedMeals.length === 0) {
  return <p>Aucun plat ne correspond à tes critères de sélection.</p>;
}

const randomMeal =
  selectedMeals[Math.floor(Math.random() * selectedMeals.length)];

return (
  <div>
    <h2>Voici un plat qui devrait te plaire :</h2>
    <div className="selected-meal">
      <h3>{randomMeal.name}</h3>
      <p>{randomMeal.price} €</p>
      <img src={randomMeal.image} alt={randomMeal.name} />
    </div>
  </div>
);
};

return (
<div>
<h2>Choisis tes critères de sélection</h2>
<label htmlFor="type">Type de cuisine :</label>
<select
id="type"
value={state.selectedType}
onChange={(e) => handleTypeChange(e)}
>
<option value="">Tous</option>
<option value="italien">Italien</option>
<option value="français">Français</option>
<option value="japonais">Japonais</option>
<option value="thaïlandais">Thaïlandais</option>
</select>
<label htmlFor="price">Prix maximum :</label>
<input
type="number"
id="price"

value={state.selectedPrice}
onChange={(e) => handlePriceChange(e)}
/>
{generateMeal()}
</div>
);
};

export default MealSelector;*/

import * as brain from "brain.js";

var net = new brain.NeuralNetwork();

net.train([
 {
    input: {
      Tomate: 1,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 0,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 1,
      Maïs: 1,
      Tofu: 0,
      Basilic: 1,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 1,
      Mozza: 1,
      Parmesan: 1, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 1,
      Nouilles: 0,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 1,
      Riz: 0,
      Tortillas: 1,
      Udon: 0
    },
    output: {
      phoe: 0.2,
      lasagne: 0.4,
      ramen: 0,
      spaghettiVeggie: 0.2,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0.2,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0.2,
      pouletrotis: 0.2,
      quichepoulet: 0,
      tacosboeuf: 0.2,
      tourtepoulet: 0.2,
      pateboeuf: 0,
      fajitas: 1,
    }
  }

  {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 1,
      Maïs: 0,
      Tofu: 0,
      Basilic: 1,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 1, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 1,
      lasagne: 0.2,
      ramen: 0.2,
      spaghettiVeggie: 0,
      nouillewok: 0.2,
      rizcantonais: 0,
      padthaiVeggie: 0.2,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0.2,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0.2,
    }
  }
  {
    input: {
      Tomate: 1,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 0,
      Petitpois: 0,
      Oeuf: 1,
      Boeuf: 1,
      Maïs: 0,
      Tofu: 0,
      Basilic: 1,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 1,
      Mozza: 1,
      Parmesan: 1, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 1,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0.2,
      lasagne: 1,
      ramen: 0,
      spaghettiVeggie: 0,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0.4,
    }
  }

  {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 1,
      Celeri: 0,
      BokChoy: 1, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0.2,
      lasagne: 0,
      ramen: 1,
      spaghettiVeggie: 0,
      nouillewok: 0.2,
      rizcantonais: 0.2,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 1,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 1,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 1,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 1,
      Courgette: 1,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0,
      spaghettiVeggie: 1,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 1,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 1,
      Celeri: 0,
      BokChoy: 1, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 1, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 1,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0.2,
      spaghettiVeggie: 0,
      nouillewok: 1,
      rizcantonais: 0.4,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 1,
      Crevette: 1,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 1,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 1,
      Celeri: 0,
      BokChoy: 1, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 1, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 1,
      Riz: 1,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0.2,
      spaghettiVeggie: 0,
      nouillewok: 0.4,
      rizcantonais: 1,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 1,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 1,
      Basilic: 0,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0.2,
      lasagne: 0,
      ramen: 0.2,
      spaghettiVeggie: 0,
      nouillewok: 0.2,
      rizcantonais: 0.2,
      padthaiVeggie: 1,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }

   {
    input: {
      Tomate: 0,
      Oignons: 0, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 0,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 1,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 1,
      Mozza: 0,
      Parmesan: 1, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 1,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0,
      spaghettiVeggie: 0,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 1,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 1,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 0,
      Riz: 0,
      Tortillas: 0,
      Udon: 1
    },
    output: {
      phoe: 0.2,
      lasagne: 0,
      ramen: 0.2,
      spaghettiVeggie: 0,
      nouillewok: 0.2,
      rizcantonais: 0.2,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 1,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }
   {
    input: {
      Tomate: 1,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 1,
      Champignons: 0,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 1,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 1,
      Celeri: 1,
      BokChoy: 0, 
      Saucisse: 1,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 1,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 1,
      Riz: 1,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0,
      spaghettiVeggie: 0,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 1,
      lomeinboeuf: 0,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }

   {
    input: {
      Tomate: 0,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 1,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 1,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 0,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 1,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 1,
      Riz: 0,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0,
      spaghettiVeggie: 0,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 1,
      rizsaucisse: 0,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }

   {
    input: {
      Tomate: 1,
      Oignons: 1, 
      Carottes: 0,
      Crevette: 0,
      Champignons: 0,
      Petitpois: 0,
      Oeuf: 0,
      Boeuf: 0,
      Maïs: 0,
      Tofu: 0,
      Basilic: 0,
      Poulet: 0,
      Celeri: 0,
      BokChoy: 0, 
      Saucisse: 1,
      Épinard: 0,
      Fromage: 0,
      Mozza: 0,
      Parmesan: 0, 
      Pommedeterre: 0,
      Vinblanc: 0,
      Broccolis: 0, 
      Ail: 1,
      Tortillas: 0,
      Nouilles: 0,
      Pâtes: 0,
      Courgette: 0,
      Poivrons: 0,
      Riz: 1,
      Tortillas: 0,
      Udon: 0
    },
    output: {
      phoe: 0,
      lasagne: 0,
      ramen: 0,
      spaghettiVeggie: 0,
      nouillewok: 0,
      rizcantonais: 0,
      padthaiVeggie: 0,
      patepesto: 0,
      udonpoulet: 0,
      jambalaya: 0,
      lomeinboeuf: 0,
      rizsaucisse: 1,
      enchiladas: 0,
      pouletrotis: 0,
      quichepoulet: 0,
      tacosboeuf: 0,
      tourtepoulet: 0,
      pateboeuf: 0,
      fajitas: 0,
    }
  }


]);

var output = net.run({
  poulet: 1,
  bannane: 1,
  radis: 0
});

//export default App;