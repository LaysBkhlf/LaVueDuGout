import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
import Contact from './Contact.js';
import Test from './component/Test.js';
import Choix from './Choix.js';


function Home(){ 
  const [Shape,setShape] = React.useState(0);
  const [Color,setColor] = React.useState("blue");
  const [Width,setWidth] = React.useState(80);
  const [Radius,setRadius] = React.useState(0);

  const [ModifPage,setModifPage] = React.useState("Home");

  return(
    <section>
    <Nav setModifPage={setModifPage}></Nav>


    {ModifPage === "Home" && <Test setModifPage={setModifPage}></Test>}
    {ModifPage === "Contact" && <Contact setModifPage={setModifPage}></Contact>}
    {ModifPage === "Choix" && <Choix setModifPage={setModifPage}></Choix>}

      </section>

  )
    
}

export default Home;