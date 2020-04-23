export const welcome = () =>{
    
    const header = document.getElementById('header');
    header.removeChild(document.getElementById('start-game'));
    let createParagraph1 = document.createElement('p');
    let createParagraph2 = document.createElement('p');

    createParagraph1.textContent = 'Good day Adventurer! Welcome to Shimi\'s RPG.';
    createParagraph2.textContent = 'First, let\'s create your hero.';
    //let welcome1 = document.createTextNode('Good day Adventurer! Welcome to Shimi\'s RPG.');
    //let welcome2 = document.createTextNode('First, let\'s create your hero.');
    //createParagraph1.appendChild(welcome1);
    //createParagraph2.appendChild(welcome2);
    
    header.appendChild(createParagraph1);
    header.appendChild(createParagraph2);
    
}