var urlString = window.location.href;
const url = new URL(urlString);
const id = url.searchParams.get('id');
console.log(id);

function showImage(){
    console.log('photos');
    console.log(id);
    var url=`https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
    
            var output = document.getElementById('div1');
            data.forEach(function(e){
    
                output.innerHTML += `<div class="row" >
                                          <div class="col-sm-3">
                                                <div class="card">
                                                    <img src="${e.url}" style="width:50%;height:50%"> 
                                                    <div class="card-body">
                                                        <h5>${e.title}</h5>
                                                        <a href="${e.thumbnailUrl}" class="btn btn-primary">ShowThumb</a>

                                                    </div> 
                                                </div>
                                            </div> 
                                    </div>`;
            }); 
        });
    }
    showImage();
 