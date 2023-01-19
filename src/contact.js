import React from 'react';
import './Lays.css';
import Nav from './component/Nav.js';
import Home from './Home.js';

function App() {
    const[ModifPage,setModifPage] = React.useState("App");
  

    return (
        <div>
        <Nav></Nav>
            <div>
                <h2>Nous contacter</h2>
                <p>remplissez ce formulaire de contact, nous vous répondrons au plus vite</p>
                <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
            <div class="row">
                <label class="required" for="name">Votre Nom:</label><br />
                <input id="nom" class="input" name="nom" type="text" value="" size="30" placeholder='Votre Nom' /><br />
                <span id="name_validation" class="error_message"></span>
            </div>
            <div class="row">
                <label class="required" for="name">Votre Prenom:</label><br />
                <input id="prenom" class="input" name="prenom" type="text" value="" size="30" placeholder='Votre Prenom' /><br />
                <span id="name_validation" class="error_message"></span>
            </div>
            <div class="row">
                <label class="required" for="email">Votre Email:</label><br />
                <input id="email" class="input" name="email" type="text" value="" size="30" placeholder='Votre Email' /><br />
                <span id="email_validation" class="error_message"></span>
            </div>
            <div class="row">
                <label class="required" for="message">Your message:</label><br />
                <textarea id="message" class="input" name="message" rows="7" cols="30" placeholder='Ton message'></textarea><br />
                <span id="message_validation" class="error_message"></span>
            </div>
    
                <input id="submit_button" type="submit" value="Send email" />
            </form>

            </div>
            </div>
        );
    }
    
    export default App  
    