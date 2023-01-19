import React from 'react';


function Nav() {
  return (
    <nav>
        <div className="App">
            <div className="menu">
                <a href='http://localhost:3000/'>EXPÉRIENCE</a>
                <img className='logo' src="LVDG.png" alt="logoLVDG"/>
                <a href='./src/contact.js'>CONTACT</a>
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