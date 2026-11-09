console.log("script.js loaded");

const apiKey = "F3E7mXYHc8YGqVCWNp4kyc4JxWrvNmkb";

async function getGifs(searchTerm) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12`;

    const response = await fetch(endpoint);
    const data = await response.json();

    const images = [];

    for (let i = 0; i < data.data.length; i++) {
        images.push(data.data[i].images.original.url);
    }

    console.log(images);

    gifContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }
}  

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");

fetchButton.addEventListener("click", async function() {
    const searchInput = document.querySelector("#search-input");
    const searchTerm = searchInput.value;

    await getGifs(searchTerm);
});