
// ************************** FETCHING THE GENRES ******************************************************************
async function fetchGenres() {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=f6ce37f88f6c0b3ac44b0104cda51dff&language=en-US")
        const genresJson = await response.json();
        return genresJson; // Returns a promise
    } catch (err) {
        console.log(err);
    }
};

function createGenreOption(genreName) {
    let option = document.createElement("option");
    option.value = genreName;
    option.innerHTML = genreName;

    return option;
};

async function getGenreList() {
    let genresJson = await fetchGenres(); 
    let genresJsonArray = Object.values(genresJson);
    let genreSelect = document.getElementById("genres");
    
    // The JSON file is made in a way that in the first index of the Array, the objects
    // of genres are stored. This is the format:
    // genres: Array() [[{...}, {...}, ...]]
    genresJsonArray[0].forEach(genreObject => {
        genreSelect.appendChild(createGenreOption(genreObject.name));
    });
};

window.onload = function() {
    getGenreList();
};
