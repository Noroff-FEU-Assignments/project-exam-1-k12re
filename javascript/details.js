const postContainer = document.querySelector(".post-content");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");

const queryString = document.location.search;
let param = new URLSearchParams(queryString);
let id = parseInt (param.get("id"));

const newUrl = "https://autotech.kenthore.no/wp-json/wp/v2/posts/" + id;
const mediaUrl = "https://autotech.kenthore.no/wp-json/wp/v2/media/";

async function renderPost() {
    
    const response = await fetch(newUrl);
    const results = await response.json();
    
    postContainer.innerHTML = "";

    postContainer.innerHTML = `<h2 class="h2">${results.title.rendered}</h2>
                                <p>${results.content.rendered}</p>`

    const imgSrc = document.querySelectorAll("figure img");    

    for (let i = 0; i < imgSrc.length; i++) {
        imgSrc[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = imgSrc[i].currentSrc;
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"};
        }
    };

};
renderPost();



    

