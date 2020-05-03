
import { getHero } from "./hero_creation.js";
import { $ } from "./$.js";
import { removeAllContent } from "./remove_all_content.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "./create_html_structure.js";
import { getEnemy } from "./models/enemy.js";
import { startFight, findEnemy } from "./fight.js";






export const actionMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
    removeAllContent('actions');

    createSaveLoadActionMenuButtons();
    
    createButtonInsideDivId('find-enemy-btn', 'Find enemy!', findEnemy, 'actions');
    createButtonInsideDivId('fight-btn', 'Fight!', startFight, 'actions');
    createButtonInsideDivId('restore-max-hp-btn', 'Restore Max HP', restoreMaxHP, 'actions');
    displayHeroStats();
    isLevelUp(getHero().exp, getHero().lvl);

}



export const displayHeroStats = () =>{
    removeAllContent('player-info');
    createParagraphInsideDivId('hero-stats', 
`Name: ${getHero().name}
Profession: ${getHero().prof}
HP: ${getHero().hp}
EP: ${getHero().ep}
Dmg Physical: ${getHero().dmg_physical}
Dmg Energy: ${getHero().dmg_energy}
Defense Physical: ${getHero().defense_p}
Defense Energy: ${getHero().defense_e}
Dodge: ${getHero().dodge}
Gold: ${getHero().gold}
Exp: ${getHero().exp}
Lvl: ${getHero().lvl}`, 'player-info');
}


const restoreMaxHP = () =>{
    getHero().hp = getHero().max_hp;
    displayHeroStats();
}

function isLevelUp(currentExp, lvl){
    const expNeededToLevelUp = 20 * Math.pow(lvl, 2) - 15 * lvl;
    console.log(expNeededToLevelUp);
    if(currentExp >= expNeededToLevelUp){
        $('player-info').textContent = `LEVEL UP!!!`;
        getHero().lvl += 1;
        getHero().onLevelUp();
    }
}