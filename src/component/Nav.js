import React from 'react';


function Nav() {
  return (
    <nav>
        <div className="App">
            <div className="menu">
                <a href='http://localhost:3000/'>EXPÉRIENCE</a>
                <img src="LVDG.jpg" alt="logoLVDG"/>
                <a href='http://localhost:3000/'>CONTACT</a>
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