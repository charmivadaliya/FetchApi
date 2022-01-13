let Postarray = [];
let PostData = [];
let startIndex = 0;
let endIndex = 50;
function seacrhShow(query){
    const url = `https://jsonplaceholder.typicode.com/albums/1/photos?q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        const results = jsonData.map(element => element.title );
        console.log(results);
    });
    onscrol();
}
function card() {
    const row = document.getElementById('div1');
    PostData.forEach(( ) => {
      row.innerHTML += `<div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <p><b>Title</b> : ${element.title}</p>
            <p><b>Image</b>: <img src=${element.url} style="width:20%"></img></p>
            <a href="${element.thumbnailUrl}" class="btn btn-primary">Show Thumb</a>
          </div>
        </div>
      </div>`;
    });
  }
function onscrol() {
    for (let i = startIndex; i < endIndex; i++) {
      PostData.push(Postarray[i]);
      console.log(PostData);
    }
    // startIndex += 10;
    // endIndex += 10;
   card();
  }
window.onload = () => {
    const searchFieldElement = document.getElementById("searchField"); 
    searchFieldElement.onkeyup = (event) => {
        seacrhShow(searchFieldElement.value);
    } 
}


