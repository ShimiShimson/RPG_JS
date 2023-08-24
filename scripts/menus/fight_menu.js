import { getHero } from "../hero_creation.js";
import { $, removeAllContent, removeContent, isNotEmptyObject } from "../helpers.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "../create_html_structure.js";
import { enemyMissing, enableFightMenuButtons, isEnemyDead, disableFightMenuButtons } from "../fight/fight.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";
// import { sleep } from "../game_controller.js";
// import { playerAttacks, useHpPotion } from "../fight/playerAction.js";
// import { enemyAction } from "../fight/enemyAction.js";
import { playerActionThenEnemyAction } from "../fight/fight_controller.js";
import { potionTypesList } from "./shop_consumables.js"



let selectedIndex;
export const fightMenu = (enemy) => {
    removeAllContent();
    displayHeroStats();
    // if (isEnemyDead (enemy)) fightActive = false
    // console.log(fightActive)
    enableFightMenuButtons();
    const swordSlash = new sound("../../audio/sword-slash.mp3");
    createButtonInsideDivId('attack-btn', 'Attack!', null, 'actions');
    $('attack-btn').addEventListener('click', function () {
        if (enemyMissing(enemy)) return
        if (isEnemyDead (enemy)) return
        disableFightMenuButtons();
        // fightActive = true;
        swordSlash.play();
        playerActionThenEnemyAction(`attack`, enemy);
        // console.log(fightActive)
    });
    const consumables = getHero().consumables;
    handleConsumables(consumables, enemy);

    createButtonInsideDivId('action-menu-btn', 'Action Menu', null, 'actions');
    $('action-menu-btn').addEventListener('click', function () {
        actionMenu();
    });
    //checkiflvlup() was here
}

const createSelectPotionType = (consumables) => {
    let choosePotionTypeParagraph = document.createElement('p');
    choosePotionTypeParagraph.id = `select-potion-type-p`;
    let choosePotionTypeText = document.createTextNode('Select Potion Type:');
    let potionTypeSelect = document.createElement('select');
    potionTypeSelect.id = 'select-potion-type';

    for (let i = 0; i < potionTypesList.length; i++) {
        const potionObjectFromList = potionTypesList[i];
        const potionTypeFromList = potionObjectFromList.type;

        if (getHero().consumables[potionTypeFromList]) {
            let option = document.createElement('option');
            const potion = getHero().consumables[potionTypeFromList]
            option.value = potion.type;
            option.text = `${potion.name}: ${potion.amount}`;
            if (getHero().consumables[potion.type].amount > 0) potionTypeSelect.add(option);
        }
    }
    potionTypeSelect.options.selectedIndex = selectedIndex;
    choosePotionTypeParagraph.appendChild(choosePotionTypeText);
    $('actions').appendChild(choosePotionTypeParagraph);
    $('actions').appendChild(potionTypeSelect);
}



function handleConsumables(consumables, enemy) {
    if (isNotEmptyObject(consumables)) {
        createSelectPotionType(consumables);
        createButtonInsideDivId('use-hp-potion-btn', 'Use HP Potion', null, 'actions');
        $('use-hp-potion-btn').addEventListener('click', function () {
            disableFightMenuButtons();
            if (enemyMissing(enemy)) return;
            playerActionThenEnemyAction(`usePotion`, enemy);
        });
    }
}

export function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }


//To jest inny sposob na zrobienie createSelectPotionType() ale ten u gory chyba lepszy?
    // let tinyPotionOption = document.createElement('option');
    // tinyPotionOption.value = `tinyHealthPotion`
    // tinyPotionOption.text = `Tiny Health Potion`
    // let smallPotionOption = document.createElement('option');
    // smallPotionOption.value = `smallHealthPotion`
    // smallPotionOption.text = `Small Health Potion`
    // let mediumPotionOption = document.createElement('option');
    // mediumPotionOption.value = `mediumHealthPotion`
    // mediumPotionOption.text = `Medium Health Potion`
    // let bigPotionOption = document.createElement('option');
    // bigPotionOption.value = `bigHealthPotion`
    // bigPotionOption.text = `Big Health Potion`
    // let hugePotionOption = document.createElement('option');
    // hugePotionOption.value = `hugeHealthPotion`
    // hugePotionOption.text = `Huge Health Potion`

    // potionTypeSelect.add(tinyPotionOption);
    // potionTypeSelect.add(smallPotionOption);
    // potionTypeSelect.add(mediumPotionOption);
    // potionTypeSelect.add(bigPotionOption);
    // potionTypeSelect.add(hugePotionOption);