import {welcome} from "./welcome.js";
import {fight} from "./fight.js";
import {fly} from "./models/enemy.js";
import { $ } from "./$.js";
import { createHtmlStructure } from "./createHtmlStructure.js"



export const startGame = () =>{
   welcome();
   createHtmlStructure();
   
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

