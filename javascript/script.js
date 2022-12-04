import errorMsg from "./error.js";

const url = `https://autotech.kenthore.no/wp-json/wp/v2/posts?&_embed`;
const latestContainer = document.querySelector(".latest-big");
const carouselContainer = document.querySelector(".carousel");
const postsContainer = document.querySelector(".posts-slim");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");

async function callAPI() {

    try {
        const response = await fetch(url);
        const results = await response.json();
    
         renderLatest(results);
         renderCarousel(results);
         renderPosts(results);
         console.log(results)
    } catch {
        const error = errorMsg("error");
        postContainer.innerHTML = error;
    };
    
};

callAPI();

function renderLatest(results) {
    
    latestContainer.innerHTML = ``;

    latestContainer.innerHTML = `<a class="heading-card" href="post.html?id=${results[0].id}">
                                <h1 class="h1">Home | Latest post</h1>
                                <img class="header-big" src="${results[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${results[0]._embedded["wp:featuredmedia"][0].alt_text}">
                                <h2 class="h2">${results[0].title.rendered}</h1>
                                <p class="post-author">By: ${results[0]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
                                <p class="excerpt">${results[0].excerpt.rendered}</p>
                                </a>`;
};

function renderCarousel(results) {

    carouselContainer.innerHTML = ``;
    
    for (let i = 1; i <= 4; i++) {
        carouselContainer.innerHTML += `<a class="card-slim carousel-element" href="post.html?id=${results[i].id}">
                                        <h2 class="h2">${results[i].title.rendered}</h2>
                                        <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}">
                                        <p class="post-author">By: ${results[i]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
                                        `
    };
};

function renderPosts(results) {

    postsContainer.innerHTML = ``;
 
    for (let i = 5; i <= 7; i++) {

        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}">
                                    <p class="post-author">By: ${results[i]._embedded.author[0].name} | ${results[i].date.substring(0, 10)}</p>
                                    <p class="excerpt">${results[i].excerpt.rendered}</p>
                                    </a>`;
    };
    postsContainer.innerHTML += `<a class="cta" href="posts-list.html">all posts</a>`;
};

const left = () => {
    const slideWidth = carouselContainer.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
};

const right = () => {
    const slideWidth = carouselContainer.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
};

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);