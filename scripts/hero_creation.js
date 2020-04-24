import {Paladin} from "./models/paladin.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";
import { saveHero, loadHero } from "./save_load.js";
import { CLASSES } from "./classType.js";

export {hero};



//declaring as a window variable for purposes of easier manipulation of object hero
let hero = {};
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
    interface1.appendChild(chooseProfessionParagraph);
    interface1.appendChild(heroProfessionSelect);


    let createHeroButton = document.createElement('button');
    createHeroButton.textContent = "Create your Hero";
    createHeroButton.id = 'create-hero';
    createHeroButton.onclick = ()=> createHero();
    interface1.appendChild(createHeroButton);
}

const createHero = () => {

    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProfession(){
        if (profession == CLASSES.assassin.value) return new Assassin (name, 70,  50,  50, 0,  0,  0,  60, 0, 0, 1);
        if (profession == CLASSES.barbarian.value) return new Barbarian(name, 200, 20,  20, 0,  10, 5,  0,  0, 0, 1);
        if (profession == CLASSES.paladin.value) return new Paladin  (name, 150, 100, 0,  30, 50, 50, 10, 0, 0, 1);
        if (profession == CLASSES.sorceress.value) return new Sorceress(name, 70,  150, 0,  60, 5,  20, 30, 0, 0, 1);
    }
    hero = whatProfession(name);
    console.log(hero);
    //Displaying name of freshly created hero (checking if hero was created)
    if ($('displayHeroParagraph')) {
        let toRemove = $('displayHeroParagraph')
        $('displayHeroParagraph').parentNode.removeChild(toRemove);
    };
    if ($('save-game')) {
        let toRemove = $('save-game')
        $('save-game').parentNode.removeChild(toRemove);
    };
    if ($('load-game')) {
        let toRemove = $('load-game')
        $('load-game').parentNode.removeChild(toRemove);
    };
    

    let displayHeroParagraph = document.createElement('p');
    displayHeroParagraph.id = "displayHeroParagraph";
    displayHeroParagraph.textContent = `${hero.name}, the ${hero.prof} has been created!`;
    interface1.appendChild(displayHeroParagraph);
    h1 = hero;

    
    createButton('save-game', 'Save game', saveHero)
    createParagraph('game-saved');

    

    //hero = new (name, 200, 20,  20, 0,  10, 5,  0,  0, 0, 1);
    //console.log(hero);
    //createButton('load-game', 'Load game', loadHero);
    //createParagraph('game-loaded');
}






export const createButton = (id, textContent, onclick) =>{
    let button= document.createElement('button');
    button.id = id;
    button.textContent = textContent;
    button.onclick = onclick;
    interface1.appendChild(button);
}

export const createParagraph = (id, textContent) =>{
    let paragraph = document.createElement('p');
    paragraph.id = id;
    $("interface").appendChild(paragraph);
}






