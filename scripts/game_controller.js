import {welcome} from "./welcome.js";
import {fight} from "./fight.js";
import {fly} from "./models/enemy.js";
import { $ } from "./$.js";
import { createHtmlStructure } from "./createHtmlStructure.js"

export{startGame, sleep};


const startGame = () =>{
   welcome();
   createHtmlStructure();
   //createButton('fight', 'FIGHT!', fight);
   

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const createButton = (id, textContent, onclick) =>{
   let button= document.createElement('button');
   button.id = id;
   button.textContent = textContent;
   button.onclick = onclick;
   $('action').appendChild(button);
}