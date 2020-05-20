
let prefixes;
let suffixes;
const database = firebase.database().ref();
const random = n => Math.floor(Math.random() * n);

const prefixString =
    'dusty, crude, rusty, cracked, chipped, short, small, tiny, pocket, sharp, strong, solid, green, wooden, metallic, copper, blinking, shiny, silver, gold, powerful, mighty, critical, thirsty, vampiric, quick, speedy, super, wonderful, magnificient, fantastic, rich, saint, holy, stone, long, big, huge, enormous, defending, spiky, thorny, wild, rocky, mad, crazy, insane, runic, titanic, heroic, cowardly, smart, dumb, genius, unlucky, lucky, elegant, obedient, brave, embracing, humble, patient, wise, transparent, obedient, ephemeric, eternal, immortal, undead, double, trollish, tanky, sandy, nifty, witty, resonating, distorting, manipulative, quality, barbaric, vigorous, vital, executing, silent, quiet, invisible, invincible, everlasting';

const suffixString =
    'Assassin, Barbarian, Paladin, Sorceress, God, Goddess, Angel, Archangel, Seraph, Cherubin, Evilness, Destruction, Goodness, Justice, Defense, Strenght, Agility, Speed, Healing, Sanity, Insanity, Destruction, Terror, Madness,  Ogre, Orc, Devil, Satan, Witch, Wizard, Dust, Sand, Grass, Water, Ice, Fire, Earth, Lightning, Thunder, Sound, Silence, Perseverance, Hiding, Dodging, Shadow, Disappearance, Thief, Leech, Vampire, Bashing, Crushing, Fairy, Sea, River, Cave, Goat, Shepherd, Destroyer, Knight, Mage, Power, Poison, Dread, Fear, Sleep, Thorns, Desolace, Wilderness, Miracles, Punching, Highlander, Mountain, Rock, Dwarf, Goblin, Troll, Phoenix, Elf, Runes, Titan, Hero, Coward, Genius, Lucker, Wisdom, Courage, Bravery, Patience, Humility, Obedience, Immortality, Undead, Transparence, Eternity, Twins, Instinct, Tank, Desert, Pity, Greed, Resonance, Distortion, Embrace, Sorcery, Manipulation, Enlightenment, Enhancement, Quality, Incineration, Vigor, Vitality, Executioner, Fantasy, Invisibility, Invincibility';

function generateJson(stringList) {
    let generatedList = [];
    const list = stringList.split(', ');
    for (let i = 0; i < list.length; i++) {
        generatedList.push({
            id: i,
            name: list[i]
        });
    }
    return generatedList;
}

prefixes = generateJson(prefixString);
suffixes = generateJson(suffixString);

function generateDatabase() {
    for (let i = 0; i < prefixes.length; i++) {
        database.ref('/prefixes/' + i).set({
            id: prefixes[i].id,
            name: prefixes[i].name
        });
    }

    for (let i = 0; i < suffixes.length; i++) {
        let id = i;
        database.ref('/suffixes/' + id).set({
            id: suffixes[i].id,
            name: suffixes[i].name
        });
    }
}


// generateDatabase();

export async function getRandomPrefix() {
    let randomId = random(prefixes.length);

    return firebase.database().ref('prefixes/' + randomId).once('value').then(function (snapshot) {
        const prefix = snapshot.val().name;
        return prefix;
    });
}

export async function getRandomSuffix() {
    let randomId = random(suffixes.length);

    return firebase.database().ref('suffixes/' + randomId).once('value').then(function (snapshot) {
        const suffix = snapshot.val().name;
        return suffix;
    });
}



// var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });

// Useful methods for manipulating data and listening to changes in data
/*
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/prefixes/' + id++).set({
    });
});

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        age: userAge.value
    };
    database.ref('/users/' + userId.value).update(newData);
});

removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users/' + userId.value).remove();
});
*/


// database.ref('/prefixes/').on("child_added", snapshot => {
//     console.log("Child(s) added!");
// })

// database.ref('/prefixes/').on("child_removed", snapshot => {
//     console.log("Child(s) removed!");
// })

// database.ref('/prefixes/').on("child_changed", snapshot => {
//     console.log("Child(s) changed!");
// })


// database.ref('/prefixes/').on("value", snapshot => {
//     console.log(snapshot.val());
// })