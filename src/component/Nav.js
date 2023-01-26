import React from 'react';


function Nav({setModifPage}) {
    
  return (
    <nav>
        <div className="App">
            <div className="menu">
                <h1 onClick={() => setModifPage("Home")}>Expérience</h1>
                <img className='logo' src="LVDG.png" alt="logoLVDG"/>
                <h1 onClick={() => setModifPage("Contact")}>Contact</h1>
            </div>
        </div>
    </nav>
  );
}
export default Nav;
