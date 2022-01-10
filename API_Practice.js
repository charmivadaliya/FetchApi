console.log("hello");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

// function getData(){
//     url = "Charmi.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
function getData(){
    url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);

        var output = document.querySelector('tbody');
        data.forEach(function(e){

            output.innerHTML += `<tr>
                                    <td>${e.id}</td>
                                    <td>${e.name}</td>
                                    <td>${e.username}</td>
                                    <td>${e.email}</td>
                                    <td>${e.phone}</td>
                                    <td>${e.website}</td>

                                    <td><button><a href=showData.html?id=${e.id}>Show</a></button></td>
                                    <td><button><a href=imageApi.html?id=${e.id}>Photos</a></button></td>
                                    
                                     
                                    </tr>`;
        }) 
    })
}
getData();