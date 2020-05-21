import { checkDamageAndDefenseType, enemyMissing, hasDodged, anyoneDeadDuringFight } from "./fight.js";
import { displayHeroStats, actionMenu } from "../menus/action_menu.js";
import { getHero } from "../hero_creation.js";
import { sleep } from "../game_controller.js";
import { $ } from "../helpers.js";
import { fightMenu } from "../menus/fight_menu.js";
import { enterLocation } from "../menus/inLocation_menu.js";



export async function playerAttacks(enemy) {
    if (enemyMissing(enemy)) return;
    let player = getHero();
    checkDamageAndDefenseType(player, enemy);

    console.log(`${enemy.name} HP: ${enemy.hp}`);
    await sleep(500);
    hasDodged(enemy, player);
    // if (await anyoneDeadDuringFight(player, enemy)) return enterLocation(userLocation);
    await sleep(500);
    displayHeroStats();
    return;
}

export const useHpPotion = () => {
    let currentSelect = $(`select-potion-type`);
    if (currentSelect === null) return console.log("no potions")
    let selectedIndex = currentSelect.options.selectedIndex;
    const potionType = currentSelect.value;
    getHero().usePotion(potionType);
    displayHeroStats();
    return selectedIndex;
}