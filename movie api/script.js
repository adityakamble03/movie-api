const apiKey = 'a3876e28';

async function fetchMovies(searchQuery,pageNumber=1) {
    try {
        const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${(searchQuery)}&page=${pageNumber}`;

        const response = await fetch(apiUrl);

        const data = await response.json();
        
        if(data.Response === "True"){
            const movies = data.Search;
            return movies;
        }

        else{
            console.error('No movies or API error', data.Error);
            return [];
        }
    } 
    catch(error){
        console.error('Error fetching data',error);
        return [];
    }
}

let searchQuery = 'adi';
let pageNumber = 1;

function previousPage(){
    pageNumber--;
    if(pageNumber === 0){
        return;
    }
    fetchMovies(searchQuery,pageNumber)
        .then(movies =>{
            let totalhtml='';
        for(let i=0;i<movies.length;i++){
            let html = `
            <div class="display-one-movie">
            <div class="display-movie-index">${i+1}</div>
            <div><img class="display-movie-poster" src="${movies[i].Poster}"></div>
            <div class="display-movie-title">${movies[i].Title}</div>
            </div>
            `;
            totalhtml += html;
        }
        let nexthtml = `
        <div class="display-buttons">
        <button onclick="previousPage();">
        previous
        </button>
        <button onclick=nextPage();>
        next
        </button>
        </div>
        `;
        totalhtml += nexthtml;
        document.querySelector('.display-movies-list').innerHTML = totalhtml;
        });
    
}

function nextPage(){
    pageNumber++;
    fetchMovies(searchQuery,pageNumber)
        .then(movies =>{
            let totalhtml='';
        for(let i=0;i<movies.length;i++){
            let html = `
            <div class="display-one-movie">
            <div class="display-movie-index">${i+1}</div>
            <div><img class="display-movie-poster" src="${movies[i].Poster}"></div>
            <div class="display-movie-title">${movies[i].Title}</div>
            </div>
            `;
            totalhtml += html;
        }
        let nexthtml = `
        <div class="display-buttons">
        <button onclick="previousPage();">
        previous
        </button>
        <button onclick=nextPage();>
        next
        </button>
        </div>
        `;
        totalhtml += nexthtml;
        document.querySelector('.display-movies-list').innerHTML = totalhtml;
        });
}

fetchMovies(searchQuery,pageNumber)
    .then(movies => {
        console.log(movies);
        let totalhtml='';
        for(let i=0;i<movies.length;i++){
            let html = `
            <div class="display-one-movie">
            <div class="display-movie-index">${i+1}</div>
            <div><img class="display-movie-poster" src="${movies[i].Poster}"></div>
            <div class="display-movie-title">${movies[i].Title}</div>
            </div>
            `;
            totalhtml += html;
        }
        let nexthtml = `
        <div class="display-buttons">
        <button onclick="previousPage();">
        previous
        </button>
        <button onclick=nextPage();>
        next
        </button>
        </div>
        `;
        totalhtml += nexthtml;
        document.querySelector('.display-movies-list').innerHTML = totalhtml;
    });


