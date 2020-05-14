import { inventoryMenu } from "./inventory_menu.js";
import { $, removeAllContent } from "../helpers.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "../create_html_structure.js";
import { getHero } from "../hero_creation.js";
import { Potion } from "../models/item.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";
import { displayConsumables } from "./shop_consumables.js";

export function shopMenu() {
    removeAllContent();
    displayHeroStats();
    createButtonInsideDivId('action-menu-btn', 'Action Menu', actionMenu, 'interface');
    createButtonInsideDivId('consumables-menu-btn', 'Consumables', displayConsumables, 'interface');
}

