import {welcome} from "./welcome.js";
import { $ } from "./helpers.js";
import { createHtmlStructure } from "./create_html_structure.js";
import { EQUIPMENT_TYPE, SLOT_TYPE } from "./enums.js";




export const startGame = () =>{
   if ($('load-game')) $('load-game').remove();
   //console.log(EQUIPMENT_TYPE);
   //console.log(SLOT_TYPE);
   welcome();
   createHtmlStructure();
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

