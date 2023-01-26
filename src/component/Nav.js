import React from 'react';


function Nav({setModifPage}) {
    console.log(setModifPage)
  return (
    <nav>
        <div>
            <div className="menu">
                <h1 onClick={() => setModifPage("Home")}>Expérience</h1>
                <img className='logo' src="LVDG.png" alt="logoLVDG"/>
                <h1 onClick={() => setModifPage("Contact")}>Contact</h1>
                <h1 onClick={() => setModifPage("Page1")}>Page1</h1>
            </div>
        </div>
    </nav>
  );
}
export default Nav;
