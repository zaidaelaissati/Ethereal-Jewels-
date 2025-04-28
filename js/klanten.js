const klantenContainer = document.getElementById('klanten-container');
 //de section aanroepen
// om later de gegevens van de klant in deze element te plaatsen

       
fetch('https://randomuser.me/api/?results=7')//api aanroepen
// de result=7 toont aan dat ik 7 gebruikers nodig heb
            
//met de get methode, de respons omzetten naar json
.then(response => response.json())
            .then(data => {
                const klanten = data.results; // de array ophalen
                klanten.forEach(klant => {
                    const klantElement = document.createElement('section'); //voor elke gebruiker een section maken
                    klantElement.className = 'klant';// klantElement verbinden met de class 'klant'

                    //de gegevens van de klant ophalen
                    const aanspreektitel = klant.name.title;
                    const voornaam = klant.name.first;
                    const achternaam = klant.name.last;
                    const land = klant.location.country;
                    const afbeelding = klant.picture.large;

                    klantElement.innerHTML = `
                        <img src="${afbeelding}" alt="Foto van ${voornaam} ${achternaam}">
                        <h2>${aanspreektitel} ${voornaam} ${achternaam}</h2>
                        <p>${land}</p>
                    `;

                    klantenContainer.appendChild(klantElement);
                });
            })