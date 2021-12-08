// import functions and grab DOM elements
import { renderSports } from './render-sports.js';
import { sports } from './sports-data.js';
import { renderTacoma } from './render-tacos.js';
import { taco } from './tacoma-data.js';
import { hero } from './hero-data.js';
import { renderSuperhero } from './render-superhero.js';

// initialize global state
const sportEl = document.getElementById('sports-list');
const tacoEl = document.getElementById('tacomas-list');
const superHero = document.getElementById('superhero-list');

// loop through the array

for (let sport of sports) {
  // render the element of each item
    const sportsEl = renderSports(sport);

  // append the rendered element 
    sportEl.append(sportsEl);
    
}


for (let tacoma of taco) {
    const tacomaEl = renderTacoma(tacoma);
    tacoEl.append(tacomaEl);
  
}
for (let heroes of hero) {
    const heroEl = renderSuperhero(heroes);
    superHero.append(heroEl);

}