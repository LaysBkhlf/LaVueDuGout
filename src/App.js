import React from 'react';
import logo from './logo.svg';
import './Lays.css';
import Nav from './component/Nav.js';
import styled from 'styled-components'; 

function App() {
  return (
   
    <div >
      <Nav></Nav>
      <img src='/BG.jpg'></img>
      </div>

  );
}

export default App  



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
