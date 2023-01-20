import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
// import App from './App.js';

function Home({setModifPage}){ 
    const [Shape,setShape] = React.useState(0);
    const [Color,setColor] = React.useState("blue");
    const [Glow,setGlow] = React.useState(0);
    // const [ModifPage,setModifPage] = React.useState("App");
    
    return(
        
            <section>
                {/* <Nav></Nav>  */}
                <div className='accueil'>
       
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
          <br></br>
          <br></br>
        <button className='gen'>GÉNÉRATION ALÉATOIRE</button>
      </section>
          <div className='ticket' style={{ width: "460px",height:"200px",borderRadius:Shape, marginRight: "0px" ,display: "flex"}}>
            
            <div className='container'>
              <div style={{backgroundColor:Color,width: "20px",height:"198px",borderRadius:Shape+"px",margin: "0px 10px"}}>           
            </div>
            <img className='ticketbord' src='/Tickets-Mockup.png'></img>
            </div>
            
          </div>
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
        
        <button className='valider'>VALIDER</button>

      </section>
      </div>
    
    </div>
            </section>
        )
    
}
export default Home;