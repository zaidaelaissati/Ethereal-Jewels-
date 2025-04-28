// winkelwagen.js


const item = document.getElementById('winkelwagen-items');
const totaal = document.getElementById('totaal-prijs');

const knoppen = document.querySelectorAll('input[type="button"]');//verwijzen naar de knop
knoppen.forEach(knop => {
  knop.addEventListener('click', kliknop);
});

function kliknop(event) {//als er op de knop wordt gedrukt wordt de productnaam en prijs getoond
  const knop = event.target;
  const product = knop.parentElement.parentElement;
  const productNaam = product.querySelector('a').innerText;
  const productPrijsText = product.querySelector('p').innerText;
  const productPrijs = parseFloat(productPrijsText.replace('€', '').replace(',', '.').replace(' EUR', '').trim());

  let bestaandItem = null;
  const items = item.children;
  for (let i = 0; i < items.length; i++) {
    const child = items[i];//array aanmaken
    if (child.textContent.includes(productNaam)) {
      bestaandItem = child;
      break;
    }
  }

  if (bestaandItem) { //als er meerdere keren op de knop wordt geklikt dan veranderd de hoeveelheid telkens +1
    const hoeveelheid = parseInt(bestaandItem.querySelector('.hoeveelheid').textContent) + 1;
    bestaandItem.querySelector('.hoeveelheid').textContent = hoeveelheid;
  } else {
    const listItem = document.createElement('li');
    //naam, prijs , aantal wordt getoond en verwijder knop wordt aangemakt
    listItem.innerHTML =  `- ${productNaam} : €${productPrijs} <span class="hoeveelheid">1</span> x <button onclick="verwijderItem(this)">Verwijderen</button>`;
    item.appendChild(listItem);
  }

  let totalePrijs = parseFloat(totaal.textContent.replace('Totaal: €', ''));
  totalePrijs += productPrijs;
  totaal.textContent = `Totaal: €${(totalePrijs)}`;
}


function verwijderItem(btn) {
 
  const hoeveelheid = parseInt(btn.parentElement.querySelector('.hoeveelheid').textContent);
  
  const prijsText = btn.parentElement.textContent.split('€')[1].trim().split(' ')[0];
  const prijs = parseFloat(prijsText.trim()) * hoeveelheid;

  let totalePrijs = parseFloat(totaal.textContent.replace('Totaal: €', '').trim()) - prijs;
  

  totalePrijs = Math.max(0, totalePrijs);
 
  totaal.textContent = `Totaal: €${totalePrijs.toFixed(2)}`;


  btn.parentElement.remove();
}