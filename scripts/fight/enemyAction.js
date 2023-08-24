import { checkDamageAndDefenseType, anyoneDeadDuringFight, hasDodged, isPlayerDead, isEnemyDead } from "./fight.js";
import { displayHeroStats, actionMenu } from "../menus/action_menu.js";
import { getHero } from "../hero_creation.js";
import { sleep } from "../game_controller.js";



export async function enemyAction(enemy) {
    const player = getHero();
    checkDamageAndDefenseType(enemy, player);
    if (isPlayerDead()) return;
    if (isEnemyDead (enemy)) return;

    // console.log(`${player.name} HP: ${player.hp}`);
    console.log(`${enemy.name} HP: ${enemy.hp}`);
    if (await anyoneDeadDuringFight(player, enemy)) return;
    await sleep(500);
    hasDodged(player, enemy);
    displayHeroStats();
    if (await anyoneDeadDuringFight(player, enemy) === `player dead`) return `player dead`
    return;
}
