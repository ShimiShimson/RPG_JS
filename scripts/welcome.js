import { $ } from "./helpers.js";
//import { getRandomPrefix, getRandomSuffix } from "./database/firebase.js";

export const welcome = () =>{
    
    
    $('header').removeChild(document.getElementById('start-game'));
    let createParagraph1 = document.createElement('p');
    let createParagraph2 = document.createElement('p');

    createParagraph1.textContent = 'Good day Adventurer! Welcome to Shimi\'s RPG.';
    createParagraph2.textContent = 'First, let\'s create your hero.';
    
    $('header').appendChild(createParagraph1);
    $('header').appendChild(createParagraph2);
}