const postContainer = document.querySelector(".post-content");
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");



//https://autotech.kenthore.no/wp-content/uploads/2022/11/herson-rodriguez-w8CcH9Md4vE-unsplash-1024x683.jpg


const queryString = document.location.search;
let param = new URLSearchParams(queryString);
let id = parseInt (param.get("id"));

const newUrl = "https://autotech.kenthore.no/wp-json/wp/v2/posts/" + id;
const mediaUrl = "https://autotech.kenthore.no/wp-json/wp/v2/media/";


async function renderPost() {
    
    const response = await fetch(newUrl);
    const results = await response.json();

    console.log(results);
    
    postContainer.innerHTML = "";

    postContainer.innerHTML = `<h2 class="h2">${results.title.rendered}</h2>
                                <p>${results.content.rendered}</p>`


    // modal.innerHTML = `<div class="img01"><img src=${results._links["wp:featuredmedia"][0].href}</div>`

    
};
renderPost();

console.log(modal);
console.log(img);
console.log(modalImg);




img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"};
}

