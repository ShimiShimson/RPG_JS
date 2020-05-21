import { getHero } from "../hero_creation.js";
import { sleep } from "../game_controller.js";
import { $, random } from "../helpers.js";
import { displayHeroStats, actionMenu } from "../menus/action_menu.js";
import { fightMenu } from "../menus/fight_menu.js";
import { Equipment } from "../models/item.js";
import { getRandomPrefix, getRandomSuffix } from "../database/firebase.js";


// let enemy;

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

export async function startFight() {
    $('actions-result').textContent = "";
    await playerAttacks();
    enableFightMenuButtons();
    fightMenu();
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
    if (enemy.hp <= 0) {
        console.log(`${enemy.name} is dead. ${player.name} won this fight and received ${enemy.exp} exp and ${enemy.gold} gold.`);
        player.exp += enemy.exp;
        player.gold += enemy.gold;
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
    if (currentExp >= getHero().expToLevelUp()) {
        $('player-info').textContent = `LEVEL UP!!!`;
        await sleep(1500);
        getHero().lvl++;
        getHero().onLevelUp();
    }
}

export const disableFightMenuButtons = () => {
    $('attack-btn').disabled = true;
    $('use-hp-potion-btn').disabled = true;
    $('action-menu-btn').disabled = true;
}

export const enableFightMenuButtons = () => {
    $('attack-btn').disabled = false;
    $('use-hp-potion-btn').disabled = false;
    $('action-menu-btn').disabled = false;
}