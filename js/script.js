console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=funny+cats&limit=12";

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    
    console.log(data);
}   