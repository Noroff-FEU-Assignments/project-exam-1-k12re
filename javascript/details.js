const postsContainer = document.querySelector(".post-content");

const queryString = document.location.search;
let param = new URLSearchParams(queryString);
let id = parseInt (param.get("id"));
let mediaId 


const newUrl = "https://autotech.kenthore.no/wp-json/wp/v2/posts/" + id;
const mediaUrl = "https://autotech.kenthore.no/wp-json/wp/v2/media/";

async function renderPost() {
    
    const response = await fetch(newUrl);
    const results = await response.json();

    console.log(results);
    
    postsContainer.innerHTML = "";

    postsContainer.innerHTML = `<h2 class="h2">${results.title.rendered}</h2>
                                <p>${results.content.rendered}</p>`
    

};

renderPost();