import { enableFightMenuButtons, isPlayerDead, isEnemyDead, anyoneDeadDuringFight } from "../fight/fight.js";
import { playerAttacks, useHpPotion } from "../fight/playerAction.js";
import { enemyAction } from "../fight/enemyAction.js";
import { fightMenu } from "../menus/fight_menu.js";
import { actionMenu } from "../menus/action_menu.js";
import { getHero } from "../hero_creation.js";
import { currentLocation } from "../menus/inLocation_menu.js"


export async function playerActionThenEnemyAction(userChoice, enemy) {
    if (userChoice === `attack`) {
        if (isEnemyDead(enemy)) {
            enableFightMenuButtons()
            return
        }
        await playerAttacks(enemy)
        if (await anyoneDeadDuringFight(getHero(), enemy)) return
        await enemyAction(enemy)
        if (isPlayerDead()) return actionMenu();
        fightMenu(enemy);
    }

    if (userChoice === `usePotion`) {
        if (isEnemyDead(enemy)) {
            enableFightMenuButtons()
            useHpPotion();
            return 
        }
        useHpPotion()
        await enemyAction(enemy);
        if (isPlayerDead()) return actionMenu();
        fightMenu(enemy);
    }
}

