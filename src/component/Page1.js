import React from "react";
import RUNIA from "./dataset";

const Page1 = () => {
    const [DATA, setDATA] = React.useState({
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
        Ail: 0,
        Tortillas: 0,
        Nouilles: 0,
        Pâtes: 0,
        Courgette: 0,
        Poivrons: 0,
        Riz: 0,
        Tortillas: 0,
        Udon: 0,
      });
  const [Ingredients, setIngredients] = React.useState(Object.keys(DATA));
  const [Left, setLeft] = React.useState();
  const [Right, setRight] = React.useState();
  const [CurrentIndex, setCurrentIndex] = React.useState(0);



  const RandomIngredients = () => {
    const Liste = [[0,21],[1,12],[2,8],[3,11],[4,5],[6,19],[7,9],[10,15],[13,26],[14,27],[20,22],[17,18],[23,25]]
    if(Liste[CurrentIndex]){
    // var Ingredients1 = Ingredients[Math.floor(Math.random() * Ingredients.length)];
    // var Ingredients2 = Ingredients[Math.floor(Math.random() * Ingredients.length)];
    let x = Math.floor(Math.random() * Liste.length)
    var Ingredients1 = Ingredients[Liste[x][0]]
    var Ingredients2 = Ingredients[Liste[x][1]]

    setLeft(Ingredients1);
    setRight(Ingredients2);
    setCurrentIndex(x)
    }
  };

  const Next = (Key) => {
    setDATA({ ...DATA, ...{ [Key]: 1 } });
    RandomIngredients();
  };
  React.useEffect(() => {
    RandomIngredients();
  }, []);


  const CallIA = ()=>{

   let DATAFROMIA = RUNIA(DATA);


  }
  return (
    <div onClick={()=>CallIA()}>
      {Left && <button onClick={() => Next(Left)}>{Left}</button>}
      {Right && <button onClick={() => Next(Right)}>{Right}</button>}
      {CurrentIndex === 0 && <h1>TESDTDEJECEJKFHE</h1>}
    </div>
  );
};

export default Page1;