import {Archer} from "./models/archer.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";
import { saveHero1, loadHero1 } from "./save_load.js";


//declaring as a window variable for purposes of easier manipulation of object hero1
window.hero1 = {};
window.h1 = {}

const interface1 = document.getElementById('interface');


export const heroCreation = () =>{
    createHtmlStructure();
    
}


const createHtmlStructure = () =>{
    let chooseNameParagraph = document.createElement('p');
    let chooseNameText = document.createTextNode('Choose a name for yourself, Adventurer:');
    let heroNameInput = document.createElement('input');
    
    chooseNameParagraph.appendChild(chooseNameText);
    interface1.appendChild(chooseNameParagraph);
    interface1.appendChild(heroNameInput);
    heroNameInput.id = 'hero-name';
    $('hero-name').value = 'Your name';

   
   



    let chooseProfessionParagraph = document.createElement('p');
    let chooseProfessionText = document.createTextNode('Choose your Profession:');
    let heroProfessionSelect = document.createElement('select');
    heroProfessionSelect.id = 'hero-profession';
    let option1 = document.createElement('option');
    option1.value = 1;
    option1.text = "Archer";
    let option2 = document.createElement('option');
    option2.value = 2;
    option2.text = "Assassin";
    let option3 = document.createElement('option');
    option3.value = 3;
    option3.text = "Barbarian";
    let option4 = document.createElement('option');
    option4.value = 4;
    option4.text = "Sorceress";

    heroProfessionSelect.add(option1);
    heroProfessionSelect.add(option2);
    heroProfessionSelect.add(option3);
    heroProfessionSelect.add(option4);

    chooseProfessionParagraph.appendChild(chooseProfessionText);
    interface1.appendChild(chooseProfessionParagraph);
    interface1.appendChild(heroProfessionSelect);


    let createHero1Button = document.createElement('button');
    createHero1Button.textContent = "Create your Hero";
    createHero1Button.id = 'create-hero';
    createHero1Button.onclick = ()=> createHero1();
    interface1.appendChild(createHero1Button);
}

const createHero1 = () => {
    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProfession(){
        if (profession === "1") return new Archer(name);
        if (profession === "2") return new Assassin(name);
        if (profession === "3") return new Barbarian(name);
        if (profession === "4") return new Sorceress(name);
    }
    hero1 = whatProfession(name);
    //Displaying name of freshly created hero (checking if hero was created)
    if ($('displayHeroParagraph')) {
        let toRemove = $('displayHeroParagraph')
        $('displayHeroParagraph').parentNode.removeChild(toRemove);
    };
    let displayHeroParagraph = document.createElement('p');
    displayHeroParagraph.id = "displayHeroParagraph"
    displayHeroParagraph.textContent = `${hero1.name}, the ${hero1.prof} has been created!`;
    interface1.appendChild(displayHeroParagraph);
    console.log(hero1.name);
    h1 = hero1;
    createSaveButton();
    createGameSavedParagraph();
    createButton('load-game', 'Load game', loadHero1);
}

const createSaveButton = () =>{
    let saveHero1Button = document.createElement('button');
    saveHero1Button.textContent = "Save game";
    saveHero1Button.id = 'create-hero';
    saveHero1Button.onclick = ()=> saveHero1();
    interface1.appendChild(saveHero1Button);
}

const createGameSavedParagraph = () =>{
    let paragraph = document.createElement('p');
    paragraph.id = "game-saved";
    $("interface").appendChild(paragraph);
}


/*
const createButton = (id, textContent, onclick) =>{
    let buttonElement = document.createElement('button');
    buttonElement.textContent = textContent.toString();
    buttonElement.id = id.toString;
    buttonElement.onclick = onclick;
    interface1.appendChild(buttonElement);
}

const createParagraph
*/





