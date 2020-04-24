import { $ } from "./$.js";
import { createHero, hero } from "./hero_creation.js";
import { saveHero, loadHero } from "./save_load.js";

export const createHtmlStructure = () =>{
    let chooseNameParagraph = document.createElement('p');
    let chooseNameText = document.createTextNode('Choose a name for yourself, Adventurer:');
    let heroNameInput = document.createElement('input');
    
    chooseNameParagraph.appendChild(chooseNameText);
    $('interface').appendChild(chooseNameParagraph);
    $('interface').appendChild(heroNameInput);
    heroNameInput.id = 'hero-name';
    $('hero-name').value = 'YourName';

   
   



    let chooseProfessionParagraph = document.createElement('p');
    let chooseProfessionText = document.createTextNode('Choose your Profession:');
    let heroProfessionSelect = document.createElement('select');
    heroProfessionSelect.id = 'hero-profession';
    let option1 = document.createElement('option');
    option1.value = 1;
    option1.text = "Assassin";
    let option2 = document.createElement('option');
    option2.value = 2;
    option2.text = "Barbarian";
    let option3 = document.createElement('option');
    option3.value = 3;
    option3.text = "Paladin";
    let option4 = document.createElement('option');
    option4.value = 4;
    option4.text = "Sorceress";

    heroProfessionSelect.add(option1);
    heroProfessionSelect.add(option2);
    heroProfessionSelect.add(option3);
    heroProfessionSelect.add(option4);

    chooseProfessionParagraph.appendChild(chooseProfessionText);
    $('interface').appendChild(chooseProfessionParagraph);
    $('interface').appendChild(heroProfessionSelect);


    let createHeroButton = document.createElement('button');
    createHeroButton.textContent = "Create your Hero";
    createHeroButton.id = 'create-hero';
    createHeroButton.onclick = ()=> createHero();
    $('interface').appendChild(createHeroButton);
}

export const displayHeroCreated = () =>{
    let displayHeroParagraph = document.createElement('p');
    displayHeroParagraph.id = "displayHeroParagraph";
    displayHeroParagraph.textContent = `${hero.name}, the ${hero.prof} has been created!`;
    $('interface').appendChild(displayHeroParagraph);
    h1 = hero;    
}

export const createSaveLoadButtons = () =>{
    createButton('save-game', 'Save game', saveHero);
    createParagraph('game-saved');

    //createButton('load-game', 'Load game', loadHero);
    //createParagraph('game-loaded');
}

export const createButton = (id, textContent, onclick) =>{
    let button= document.createElement('button');
    button.id = id;
    button.textContent = textContent;
    button.onclick = onclick;
    $('interface').appendChild(button);
}

export const createParagraph = (id, textContent) =>{
    let paragraph = document.createElement('p');
    paragraph.id = id;
    $("interface").appendChild(paragraph);
}