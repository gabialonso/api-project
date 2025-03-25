const apiKey = "t2y24a7WChxP8UybZCzTWHnNGdd7hc3w";

document.getElementById("searchButton").addEventListener("click", fetchGifs);

function fetchGifs() {
    const query = document.getElementById("gifInput").value;
    if (query === "") {
        alert("Please enter a search term");
        return;
    }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=3`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGifs(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayGifs(data) {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";

    data.data.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.original.url;
        gifContainer.appendChild(img);
    });
}