let listMovie = document.getElementById("list-movie")
const img = "https://image.tmdb.org/t/p/w500"
let search = document.getElementById('searchinput');


function fetchAll(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=a79af0bef77eaa94b14d0df50def0e15")
    .then(result => result.json()
    ).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}
fetchAll();


search.addEventListener('change', (event) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a79af0bef77eaa94b14d0df50def0e15&query=${event.target.value}&page=1`)
    .then(result => result.json()
    ).then(data => {
        if(data.results !== undefined){
            showMovies(data.results);
        }else {
            fetchAll();
        }
     
    })

})

function deleteAllMovies(){
    while(listMovie.hasChildNodes()){
        listMovie.removeChild(listMovie.firstChild)
    }
}
function showMovies(data) {

    deleteAllMovies();
    data.forEach((item, index) => {
        listMovie.innerHTML +=
            `<div class="card" style="width: 18rem; height:39rem">
            <img src="${img}/${item.poster_path}" style="height:30rem" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="flex">
                <div class="card-title" style="font-size:15px;">${item.original_title}</div>
                <div>${item.vote_average}</div>
                </div> 
                <br>
                <a>${item.release_date}</a>
                <br>   
                <br>   
                <a href="#" class="btn btn-primary">Book ticket Now</a>
            </div>
           
          </div>`
        

    })
}