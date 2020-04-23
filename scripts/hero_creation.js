import {Archer} from "./models/archer.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";



//export {cp1, cp2, saveHero1, loadHero1}



//export let hero1 = new Assassin('Shimi');

let hero1;

export const heroCreation = () =>{
    let interface1 = document.getElementById('interface');
    let chooseNameParagraph = document.createElement('p');
    let chooseNameText = document.createTextNode('Choose a name for yourself Adventurer:');
    let heroNameInput = document.createElement('input');
    heroNameInput.id = 'hero-name';

    chooseNameParagraph.appendChild(chooseNameText);
    interface1.appendChild(chooseNameParagraph);
    interface1.appendChild(heroNameInput);

   



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









//Function creating hero1
const createhero1 = () => {
    console.log('Im cp1');
    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProffession(){
        if (profession === "1") return new Assassin(name);
        if (profession === "2") return new Barbarian(name);
        if (profession === "3") return new Sorceress(name);
        if (profession === "4") return new Archer(name);
    }
    hero1 = whatProffession(name);
    //Displaying name of freshly created hero (checking if hero was created)
    document.getElementById("hero1").innerHTML = p1.name + " created";
}


//Function creating hero2
const cp2 = () => {
    const name = document.getElementById('name2').value;
    const proff = document.getElementById('proff2').value;
    function whatProffession(){
        if (proff === "1") return new Assassin(name);
        if (proff === "2") return new Barbarian(name);
        if (proff === "3") return new Sorceress(name);
        if (proff === "4") return new Archer(name);
    }
    window.p2 = whatProffession(name);
    //Displaying name of freshly created hero (checking if hero was created)
    document.getElementById("hero2").innerHTML = p2.name + " created";
}

//Saving hero1 and hero2 to local storage
const savehero1 = () => {
    console.log(p1);
    console.log(p2);
    localStorage.setItem("sp1", JSON.stringify(p1));
    localStorage.setItem("sp2", JSON.stringify(p2));
    document.getElementById("gamesaved").innerHTML = "Game saved";
    
}

//Loading hero1 and hero2 from local storage
const loadhero1 = () =>{
    const sp1 = JSON.parse(localStorage.getItem("sp1"));
    const sp2 = JSON.parse(localStorage.getItem("sp2"));
    if (sp1 != null && sp1 != undefined){
        //I don't understand exactly why but when I declare "p1 = sp1" (previous code) instead of "window.p1 = sp1"; accessing p1 from another file is throwing "ReferenceError: p1 is not defined" 
        window.p1 = sp1;
        console.log(p1);
        document.getElementById("gameloaded").innerHTML = p1.name + " loaded!";
    } else {
        console.log("Error during loading hero 1!");
    }
    if (sp2 != null && sp2 != undefined){
        //I don't understand exactly why but when I declare "p2 = sp2" (previous code) instead of "window.p2 = sp2", accessing p2 from another file is throwing "ReferenceError: p2 is not defined"
        window.p2 = sp2;
        console.log(p2);
        document.getElementById("gameloaded").innerHTML += " " + p2.name + " loaded!";
    } else {
        console.log("Error during loading hero 2!");
    }
}
