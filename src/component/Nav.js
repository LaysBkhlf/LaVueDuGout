import React from 'react';


function Nav() {
  return (
    <nav>
        <div className="App">
            <div className="menu">
                <img src="LVDG.jpg" alt="logoLVDG"/>
                <a href='http://localhost:3000/'>Accueil</a> 
                <a href='http://localhost:3000/'>Information</a>
                <a href='http://localhost:3000/'>Contact</a>
            </div>
                <div className='sign'>
                    <a href='http://localhost:3000/'>Connexion</a>
                    <button>Inscription</button>
                </div>
        </div>
    </nav>
  );
}

export default Nav;