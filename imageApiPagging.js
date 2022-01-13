const searchBar = document.getElementById('searchBar');
let hpCharacters = [];
let Postarray = [];
let startIndex = 0;
let endIndex = 50;

document.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCharacters = Postarray.filter((character) => {
    return character.title.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

function loadCharacters() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => {
      hpCharacters = json;
      console.log(hpCharacters);
      onscrol();
    });
}

function displayCharacters(characters) {
  const charactersList = document.getElementById('charactersList');
  const htmlString = characters.map((character) => {
    return `
            <li class="character">
                 <h2>${character.title}</h2>
                <a href="${character.thumbnailUrl}">Show</a>
                <img src="${character.url}"></img>
            </li>
        `;
  });
  charactersList.innerHTML = htmlString;
}

function onscrol() {
  for (let i = startIndex; i < endIndex; i++) {
    Postarray.push(hpCharacters[i]);
    console.log(Postarray);
  }
  displayCharacters(Postarray);
}

loadCharacters();
