import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
import Home from './Home.js';

function App() {
  const [Shape,setShape] = React.useState(0)
  const [Color,setColor] = React.useState("blue")
  const [Glow,setGlow] = React.useState(0)
  const[ModifPage,setModifPage] = React.useState("App");

  return (
   
    <div className='accueil'>
      
      <Nav></Nav>
        {ModifPage === "Home" && <Home setModifPage={setModifPage}></Home>}
       
      <div className='Carte'>
      <section className='blocG'>
        <h2>Créer votre billet</h2>
          <h3>Shape</h3>
          <div class="slidecontainer">
            <input onChange={(e)=>setShape(e.target.value)} value={Shape} type="range" min="1" max="100" className="slider" />
          </div>
          <h3>Color</h3>
          {<div class="slidecontainercolor">
            <input onChange={(e)=>setColor(e.target.value)} value={Color} type="color" min="1" max="100" className="slidercolor" />
          </div> }
          <h3>Glow</h3>
          <div class="slidecontainer">
            <input onChange={(e)=>setGlow(e.target.value)} value={Glow} type="range" min="1" max="100" className="slider" />
          </div>
          <div style={{backgroundColor:'black',width: "500px",height:"300px",borderRadius:Shape,display: "flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:Color,width: "100px",height:"200px",borderRadius:Shape+"px"}}>

            </div>
          </div>
          <br></br>
          <br></br>
        <button className='gen'>Génération aléatoire</button>
      </section>
      <section className='blocD'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean pharetra sem at massa scelerisque hendrerit quis eu 
          diam. Aenean eu quam pulvinar, imperdiet nunc vitae, 
          imperdiet est. Pellentesque non justo tincidunt, eleifend 
          mauris vel, condimentum nulla. Vestibulum dictum tellus eu 
          eros hendrerit commodo. Suspendisse convallis non erat non 
          sagittis. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Etiam nulla 
          tortor, molestie ac efficitur in, ornare sed massa. 
          Etiam sagittis aliquam nibh, in facilisis tortor laoreet.</p>
        
        <button className='valider'>Valider</button>

      </section>
      </div>
    
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
