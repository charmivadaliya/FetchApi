var urlString = window.location.href;
const url = new URL(urlString);
const id = url.searchParams.get('id');
console.log(id);

function showData(){
    console.log(id);
    var url=`https://jsonplaceholder.typicode.com/posts?userID=${id}`;

        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
    
            var output = document.getElementById('tbody');
            data.forEach(function(e){
    
                output.innerHTML += `<tr>
                                        <td>${e.id}</td>
                                        <td>${e.title}</td>
                                        <td>${e.body}</td>
                                    </tr>`;
            }); 
        });
    }
    showData();
 