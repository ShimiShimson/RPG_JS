import { removeAllContent } from "./remove_all_content.js"
import { createParagraph } from "./create_html_structure.js";
import { hero } from './hero_creation.js';
import { $ } from "./$.js";

export const actionMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');

    createParagraph('hero-stats', 
`Name: ${hero.name}
Profession: ${hero.prof}
HP: ${hero.hp}
EP: ${hero.ep}
Dmg Physical: ${hero.dmg_physical}
Dmg Energy: ${hero.dmg_energy}
Defense Physical: ${hero.defense_p}
Defense Energy: ${hero.defense_e}
Dodge: ${hero.dodge}
Gold: ${hero.gold}
Exp: ${hero.exp}
Lvl: ${hero.lvl}`);

    $('hero-stats').setAttribute('style', 'white-space: pre;');
}

