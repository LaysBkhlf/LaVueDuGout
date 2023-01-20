import React from 'react';


function Nav({setModifPage}) {
    
  return (
    <nav>
        <div className="App">
            <div className="menu">
                <a href='http://localhost:3000/'>EXPÉRIENCE</a>
                <img className='logo' src="LVDG.png" alt="logoLVDG"/>
                <h1 onClick={() => setModifPage("Contact")}>Contact
        </h1>
            </div>
        </div>
    </nav>
  );
}

export default Nav;

/*  <div className='sign'>
                    <a href='http://localhost:3000/'>Connexion</a>
                    <button>Inscription</button>
                </div>*/