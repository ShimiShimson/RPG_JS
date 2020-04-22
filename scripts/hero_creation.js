//exporting all functions
export {Player, Barbarian, Assassin, Sorceress, Archer, cp1, cp2, saveplayers, loadplayers};




//declaring generic class Player
//I wanted to use it for actions common to all classes (eg. fighting), but I use JSON.stringify. It doesn't save functions
//Maybe I can use it for inventory
class Player {
    constructor(name){
    this.name = '';
    this.proff = '';
    this.hp = 0;
    this.ep = 0;
    this.attack = 0;
    this.defense = 0;
    this.e_defense = 0;
    this.dodge = 0;
    }
}

//declaring all proffessions which player can choose
class Assassin extends Player{
    constructor(name) {
        super();
        this.name = name;
        this.proff = 'Assassin';
        this.hp = 50;
        this.ep = 50;
        this.attack = 60;
        this.defense = 0;
        this.e_defense = 0;
        this.dodge = 70;
    }
}

class Barbarian extends Player{
    constructor(name){
        super();
        this.name = name;
        this.proff = 'Barbarian';
        this.hp = 400;
        this.ep = 20;
        this.attack = 20;
        this.defense = 20;
        this.e_defense = 5;
        this.dodge = 40;
    }
}


class Sorceress extends Player{
    constructor(name){
       super();
       this.name = name;
       this.proff = 'Sorceress';
       this.hp = 70;
       this.ep = 150;
       this.attack = 40;
       this.defense = 5;
       this.e_defense = 20;
       this.dodge = 10;
    }
}

class Archer extends Player{
    constructor(name){
        super();
        this.name = name;
        this.proff = 'Archer';
        this.hp = 100;
        this.ep = 50;
        this.attack = 30;
        this.defense = 15;
        this.e_defense = 15;
        this.dodge = 40;
    }
}

//Function creating Player1
const cp1 = () => {
    const name = document.getElementById('name1').value;
    const proff = document.getElementById('proff1').value;
    function whatProffession(){
        if (proff === "1") return new Assassin(name);
        if (proff === "2") return new Barbarian(name);
        if (proff === "3") return new Sorceress(name);
        if (proff === "4") return new Archer(name);
    }
    window.p1 = whatProffession(name);
    //Displaying name of freshly created player (checking if player was created)
    document.getElementById("player1").innerHTML = p1.name + " created";
}


//Function creating Player2
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
    //Displaying name of freshly created player (checking if player was created)
    document.getElementById("player2").innerHTML = p2.name + " created";
}

//Saving player1 and player2 to local storage
const saveplayers = () => {
    console.log(p1);
    console.log(p2);
    localStorage.setItem("sp1", JSON.stringify(p1));
    localStorage.setItem("sp2", JSON.stringify(p2));
    document.getElementById("gamesaved").innerHTML = "Game saved";
    
}

//Loading player1 and player2 from local storage
const loadplayers = () =>{
    const sp1 = JSON.parse(localStorage.getItem("sp1"));
    const sp2 = JSON.parse(localStorage.getItem("sp2"));
    if (sp1 != null && sp1 != undefined){
        //I don't understand exactly why but when I declare "p1 = sp1" (previous code) instead of "window.p1 = sp1"; accessing p1 from another file is throwing "ReferenceError: p1 is not defined" 
        window.p1 = sp1;
        console.log(p1);
        document.getElementById("gameloaded").innerHTML = p1.name + " loaded!";
    } else {
        console.log("Error during loading Player 1!");
    }
    if (sp2 != null && sp2 != undefined){
        //I don't understand exactly why but when I declare "p2 = sp2" (previous code) instead of "window.p2 = sp2", accessing p2 from another file is throwing "ReferenceError: p2 is not defined"
        window.p2 = sp2;
        console.log(p2);
        document.getElementById("gameloaded").innerHTML += " " + p2.name + " loaded!";
    } else {
        console.log("Error during loading Player 2!");
    }
}
