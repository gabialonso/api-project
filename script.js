const apiKey = "t2y24a7WChxP8UybZCzTWHnNGdd7hc3w";

document.getElementById("searchButton").addEventListener("click", fetchGifs);

function fetchGifs() {
    const query = document.getElementById("searchInput").value;
    if (query === "") return;
}

const url = `api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;

fetch(url)
    .then(response => response.json())
    .then()