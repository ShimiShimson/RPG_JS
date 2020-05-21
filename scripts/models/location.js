import { random } from "../helpers.js";


export class Location {
    constructor(type, name, minLvl, maxLvl, enemiesList){
        this.type = type;
        this.name = name;
        this.minLvl = minLvl;
        this.maxLvl = maxLvl;
        this.enemiesList = enemiesList;
    }
    getRandomEnemyFrom() {
        const enemy = this.enemiesList[random(this.enemiesList.length)]
        return enemy;
    }
}
