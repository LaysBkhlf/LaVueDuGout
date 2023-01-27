import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
import Contact from './Contact.js';
import Test from './component/Test.js';
import RUNIA from './component/dataset';
import Page1 from './component/Page1.js';
import Resultat from './Resultat.js';

function Home(){ 
  const [Shape,setShape] = React.useState(0);
  const [Color,setColor] = React.useState("blue");
  const [Width,setWidth] = React.useState(80);
  const [Radius,setRadius] = React.useState(0);

  const [ModifPage,setModifPage] = React.useState("Home");

  return(
    <section>
    
    <Nav setModifPage={setModifPage}></Nav>

    {/* <button className='RUNIA' onClick={()=>{RUNIA()}}>run ia</button> */}
    {ModifPage === "Home" && <Test setModifPage={setModifPage}></Test>}
    {ModifPage === "Contact" && <Contact setModifPage={setModifPage}></Contact>}
    {ModifPage === "Page1" && <Page1 setModifPage={setModifPage}></Page1>}

      </section>

  )
    
}

export default Home;