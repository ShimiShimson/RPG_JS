import {Archer} from "./models/archer.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";


//declaring as a window variable for purposes of easier manipulation of object hero1
window.hero1 = {};
window.h1 = {}

export const heroCreation = () =>{
    let interface1 = document.getElementById('interface');
    let chooseNameParagraph = document.createElement('p');
    let chooseNameText = document.createTextNode('Choose a name for yourself, Adventurer:');
    let heroNameInput = document.createElement('input');
    heroNameInput.id = 'hero-name';

    chooseNameParagraph.appendChild(chooseNameText);
    interface1.appendChild(chooseNameParagraph);
    interface1.appendChild(heroNameInput);

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

    
    const createHero1 = () => {
        const name = document.getElementById('hero-name').value;
        const profession = document.getElementById('hero-profession').value;
        function whatprofession(){
            if (profession === "1") return new Archer(name);
            if (profession === "2") return new Assassin(name);
            if (profession === "3") return new Barbarian(name);
            if (profession === "4") return new Sorceress(name);
        }
        hero1 = whatProfession(name);
        //Displaying name of freshly created hero (checking if hero was created)
        console.log(hero1.name);
        if ($('displayHeroParagraph')) {
            let toRemove = $('displayHeroParagraph')
            console.log($('displayHeroParagraph').childNodes);
            $('displayHeroParagraph').parentNode.removeChild(toRemove);
        };
        let displayHeroParagraph = document.createElement('p');
        displayHeroParagraph.id = "displayHeroParagraph"
        displayHeroParagraph.textContent = `${hero1.name}, the ${hero1.prof} has been created!`;
        interface1.appendChild(displayHeroParagraph);
        console.log(hero1.name);
        h1 = hero1;
    }
}











//Function creating hero2
/*
const cp2 = () => {
    const name = document.getElementById('name2').value;
    const prof = document.getElementById('prof2').value;
    function whatProfession(){
        if (prof === "1") return new Assassin(name);
        if (prof === "2") return new Barbarian(name);
        if (prof === "3") return new Sorceress(name);
        if (prof === "4") return new Archer(name);
    }
    window.p2 = whatProfession(name);
    //Displaying name of freshly created hero (checking if hero was created)
    document.getElementById("hero2").innerHTML = p2.name + " created";
}
*/

//Saving hero1 to local storage
const savehero1 = () => {
    console.log(hero1);
    localStorage.setItem("sh1", JSON.stringify(hero1));
    document.getElementById("gamesaved").innerHTML = "Hero1 saved";
    
}

//Loading hero1 and hero2 from local storage
const loadhero1 = () =>{
    const sh1 = JSON.parse(localStorage.getItem("sh1"));
    if (sh1 != null && sh1 != undefined){
        //hero1 = new sh1.prof(name, hp, ep, att, def ,etc);
        console.log(hero1);
        document.getElementById("gameloaded").innerHTML = p1.name + " loaded!";
    } else {
        console.log("Error during loading hero 1!");
    }
}
