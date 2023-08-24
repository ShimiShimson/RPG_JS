import { getHero } from "../hero_creation.js";
import { sleep } from "../game_controller.js";
import { $, random, removeContent } from "../helpers.js";
import { displayHeroStats, actionMenu } from "../menus/action_menu.js";
import { fightMenu, sound } from "../menus/fight_menu.js";
import { Equipment } from "../models/item.js";
import { getRandomPrefix, getRandomSuffix } from "../database/firebase.js";
import { createButtonInsideDivId } from "../create_html_structure.js";
import { currentLocation } from "../menus/inLocation_menu.js";


export function isPlayerDead () {
    if (getHero().hp <= 0) {
        console.log(`You're dead.`);
        return true;
    }
}

export function isEnemyDead (enemy) {
    if (enemy.hp <= 0) {
        console.log(` ${enemy.name} is dead.`);
        return true;
    }
}

export function checkDamageAndDefenseType(attacker, defender) {
    if (attacker.dmg_physical >= attacker.dmg_energy) {
        attacker.damage = attacker.dmg_physical;
        defender.defense = defender.defense_p;
    }
    else {
        attacker.damage = attacker.dmg_energy;
        defender.defense = defender.defense_e;
    }
}

export function hasDodged(defender, attacker) {
    const randomChance = random(100);
    const dodgeChance = defender.dodge;
    if (randomChance < dodgeChance) {
        return console.log(`${defender.name} dodged the attack!`)
    }
    else {
        return calculateDamage(defender, attacker)
    }
}


function calculateDamage(defender, attacker) {
    let damageMinusDefense = attacker.damage - defender.defense;
    //value of damageRoll will always be between 80 - 119% of damageMinusDefense variable
    const damageRoll = Math.floor(damageMinusDefense * 0.8 + random(damageMinusDefense * 0.4));
    if (damageRoll <= 0) {
        return console.log(`${defender.name} defended the attack!`)
    }
    else {
        defender.hp -= damageRoll;
        return console.log(`${defender.name} got hit by ${attacker.name} and lost ${damageRoll} HP.`);
    }
}

export function enemyMissing(enemy) {
    if (enemy === undefined || enemy === null) {
        alert(`You can't do it if there is no enemy.`);
        return true;
    }
}

export async function anyoneDeadDuringFight(player, enemy) {
    let stop = false;
    const clickNiceSound = new sound("../../audio/click-nice.mp3")
    if (enemy.hp <= 0) {
        console.log(`${enemy.name} is dead. ${player.name} won this fight and received ${enemy.exp} exp and ${enemy.gold} gold.`);
        player.exp += enemy.exp;
        player.gold += enemy.gold;
        clickNiceSound.play();
        removeButtonById('attack-btn');
        removeButtonById('use-hp-potion-btn');
        enableFightMenuButtons();
        createLookForAnotherEnemyButton();
        displayHeroStats();
        await lootRoll(enemy);
        await checkIfLevelUp(getHero().exp, getHero().lvl);
        stop = true;
    }
    if (player.hp <= 0) {
        console.log(`${player.name} is dead. ${enemy.name} won this fight.`);
        // enemy = undefined;
        return `player dead`
        stop = true;
    }
    return stop;
}



async function lootRoll(enemy) {
    const randomRoll = random(100);
    const chanceForLoot = 50;
    if (randomRoll < chanceForLoot) {
        //za kazdym razem kiedy wywoluje new Equipemnt musze dac jako parametry te funkcje. Czy tak powinno byc?
        //takze musze je tu zaimportowac, tak samo musze je zaimportowac i wywolac w funkcji createHero()
        getHero().inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
        $('player-info').textContent = `${enemy.name} dropped new item! Check your inventory`;
        await sleep(3000);
    }
}

async function checkIfLevelUp(currentExp) {
    const lvlUpSound = new sound("../../audio/fusrodah.mp3")
    if (currentExp >= getHero().expToLevelUp()) {
        lvlUpSound.play();
        $('player-info').textContent = `LEVEL UP!!!`;
        await sleep(1500);
        getHero().lvl++;
        getHero().onLevelUp();
    }
}

export const disableFightMenuButtons = () => {
    if ($('attack-btn'))        $('attack-btn').disabled        = true;
    if ($('use-hp-potion-btn')) $('use-hp-potion-btn').disabled = true;
    if ($('action-menu-btn'))   $('action-menu-btn').disabled   = true;
}

export const enableFightMenuButtons = () => {
    if ($('attack-btn'))        $('attack-btn').disabled        = false;
    if ($('use-hp-potion-btn')) $('use-hp-potion-btn').disabled = false;
    if ($('action-menu-btn'))   $('action-menu-btn').disabled   = false;
}

function createLookForAnotherEnemyButton() {
    createButtonInsideDivId('fight-menu-btn', `Look for another enemy to fight`, null, 'actions');
    $('fight-menu-btn').addEventListener('click', function () {
        console.log(currentLocation)
        const newEnemy = currentLocation.getRandomEnemyFrom();
        console.log(newEnemy)
        if (isPlayerDead()) return actionMenu();
        fightMenu(newEnemy);
    });
}

function removeButtonById(id) {
    if ($(id)) $(id).remove();
}