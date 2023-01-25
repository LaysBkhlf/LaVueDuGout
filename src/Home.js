import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
// import App from './App.js';
function Home({setModifPage}){ 
  const [Shape,setShape] = React.useState(0);
  const [Color,setColor] = React.useState("blue");
  const [Glow,setGlow] = React.useState(0);
  // const [ModifPage,setModifPage] = React.useState("App");
  function generateRandomValues() {
    setShape(Math.floor(Math.random() * 10) + 1);
    setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    setGlow(Math.floor(Math.random() * 100) + 1);
  }
  return(
      
          <section>
              {/* <Nav></Nav>  */}
              <div className='accueil'>
     
    <div className='Carte'>
    <section className='blocG'>
      <h2>Créer votre billet</h2>
        <h3>Shape</h3>
        <div class="slidecontainer">
          <input onChange={(e)=>setShape(e.target.value)} value={Shape} type="range" min="1" max="10" className="slider" />
        </div>
        <h3>Color</h3>
        {<div class="slidecontainercolor">
          <input onChange={(e)=>setColor(e.target.value)} value={Color} type="color" min="1" max="100" className="slidercolor" />
        </div> }
        <h3>Glow</h3>
        <div class="slidecontainer">
          <input onChange={(e)=>setGlow(e.target.value)} value={Glow} type="range" min="1" max="100" className="slider" />
        </div>
        <br></br>
        <br></br>
        <button className='gen' onClick={generateRandomValues}>GÉNÉRATION ALÉATOIRE</button>
    </section>
        <div className='ticket' style={{ width: "460px",height:"200px",borderRadius:Shape, marginRight: "0px" ,display: "flex"}}>
          Glow+"px"
          <div className='container'>
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",margin: "0px 10px",position:"absolute",top:"10px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}> 
            <div style={{backgroundColor:Color,height:Shape+"px",width:Glow+"%",position:"absolute",top:"15px"}}>
               
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div> </div> 
<img className='ticketbord' src='/Tickets-Mockup.png'></img>
</div>
      <section className='blocD'>
        <p>Bienvenue sur notre site de génération de plats ! Nous vous offrons la possibilité de 
          créer des plats uniques en fonction de vos préférences alimentaires. Que vous soyez végétarien, 
          végétalien ou simplement à la recherche d'inspiration pour vos repas, notre site est fait pour vous.
          Une fois vos préférences selectionné, notre système générera un plats adaptés à vos goûts, 
          avec des recettes détaillées et les ingrédients nécessaires. Vous pouvez également commander 
          une livraison pour vous régaler.</p>
        
        <button className='valider'>VALIDER</button>

      </section>
      </div>
    
    </div>
            </section>
            
        )
    
}
export default Home;