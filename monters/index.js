console.log("hello world");

let monsters = [
    {
        id: 1,
        name: 'Frank',
        scariness: 'very-scary',
        freindsCount: 2,
        timeOfDay: 'night',
        type: 'person',
        color: 'green'
    },
    {
        id: 2,
        name: 'Griffin',
        scariness: 'cute-and-fuzzy',
        freindsCount: 1000,
        timeOfDay: 'daytime',
        type: 'griffin',
        color: 'orange'
    },
    {
        id: 3,
        name: 'Draco',
        scariness: 'badass',
        freindsCount: 13,
        timeOfDay: 'all-the-time',
        type: 'dragon',
        color: 'green'
    },
];

function handleH2Click() {
    console.log("h2 was clicked");
}

function renderDom() {
    let ulElement = document.getElementById('append-here');

    for (let i = 1; i <= 5; i++) {
        let liElement = document.createElement('li');

        if (i === 4) {
            liElement.innerHTML = "Fourth li node";
            ulElement.appendChild(liElement);
            continue;
        }
        liElement.innerHTML = "Text content of li node";
    
        ulElement.appendChild(liElement);
    }
    renderAllMonsters();
    renderFilteredMonsters();
}



function readyDOMv1() {

    let els = document.getElementsByTagName('h2')
    console.log(els);
    for (const el of els) {
        console.log(el);
        el.addEventListener( 'click', handleH2Click);
    }
}

function renderAllMonsters() {
  

    for (const monster of monsters) {
        let liElement = document.createElement('li');
        liElement.innerHTML = monster.name;
        document.getElementById('monsters-list').appendChild( liElement );
    }
}

function renderFilteredMonsters() {
    let filteredMonsters = monsters.filter( ( item ) => {
        if ( item.color === 'green') {
            return item
        }
    });

    for (const monster of filteredMonsters) {
        let liElement = document.createElement('li');
        liElement.innerHTML = monster.name;
        document.getElementById('filtered-monsters').appendChild( liElement );
    }
}

readyDOMv1();
renderDom();