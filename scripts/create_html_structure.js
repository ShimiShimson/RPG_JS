import { $ } from "./$.js";
import { createHero, hero } from "./hero_creation.js";
import { saveHero, loadHero } from "./save_load.js";
import { actionMenu } from "./action_menu.js";
import { CLASSES } from "./class_type.js";


export const createHtmlStructure = () =>{

    createChooseHeroName();
    createSelectProfession();
    createCreateHeroButton();

}


const createChooseHeroName = () =>{

    let chooseNameParagraph = document.createElement('p');
    let chooseNameText = document.createTextNode('Choose a name for yourself, Adventurer:');
    let heroNameInput = document.createElement('input');
    
    chooseNameParagraph.appendChild(chooseNameText);
    $('interface').appendChild(chooseNameParagraph);
    $('interface').appendChild(heroNameInput);
    heroNameInput.id = 'hero-name';
    $('hero-name').value = 'YourName';
}


const createSelectProfession = () =>{

    let chooseProfessionParagraph = document.createElement('p');
    let chooseProfessionText = document.createTextNode('Choose your Profession:');
    let heroProfessionSelect = document.createElement('select');
    heroProfessionSelect.id = 'hero-profession';

    let assassinOption = document.createElement('option');
    assassinOption.value = CLASSES.assassin.value;
    assassinOption.text = CLASSES.assassin.prof;
    let barbarianOption = document.createElement('option');
    barbarianOption.value = CLASSES.barbarian.value;
    barbarianOption.text = CLASSES.barbarian.prof;
    let paladinOption = document.createElement('option');
    paladinOption.value = CLASSES.paladin.value;
    paladinOption.text = CLASSES.paladin.prof;
    let sorceressOption = document.createElement('option');
    sorceressOption.value = CLASSES.sorceress.value;
    sorceressOption.text = CLASSES.sorceress.prof;

    heroProfessionSelect.add(assassinOption);
    heroProfessionSelect.add(barbarianOption);
    heroProfessionSelect.add(paladinOption);
    heroProfessionSelect.add(sorceressOption);

    chooseProfessionParagraph.appendChild(chooseProfessionText);
    $('interface').appendChild(chooseProfessionParagraph);
    $('interface').appendChild(heroProfessionSelect);
}


const createCreateHeroButton = () =>{

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
    //h1 is for manipulating and testing hero object in console
    h1 = hero;    
}


export const createSaveLoadButtons = () =>{
    
    createButton('save-game', 'Save game', saveHero);
    createParagraph('game-saved');
    
    createButton('load-game', 'Load game', loadHero);
    createParagraph('game-loaded');
    
    createButton('action-menu-btn', 'Action Menu', actionMenu);
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

export const createActionMenuButton = () =>{
    createButton('action-menu-btn', 'Action Menu', actionMenu);
}