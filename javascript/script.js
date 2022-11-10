const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts/";
const mediaUrl = "https://autotech.kenthore.no/wp-json/wp/v2/media/";
const latestContainer = document.querySelector(".latest-big");
const carouselContainer = document.querySelector(".carousel");
const postsContainer = document.querySelector(".posts-slim");


 

async function callAPI() {
    const response = await fetch(url);
    const results = await response.json();
    
    //const mediaResponse = await fetch(mediaUrl);
    //const mediaResults = await mediaResponse.json();
    

    //renderLatest(results);
    renderPosts(results);

    
};

callAPI();

function renderLatest(results) {
    
    latestContainer.innerHTML = "";

    latestContainer.innerHTML = `<h2 class="h2">Latest</h2>
    <img class="header-big" src=""`;


};

renderLatest();

function renderPosts(results) {

    console.log(results);

    postsContainer.innerHTML = "";

    for (let i = 1; i < results.length; i++) {
        postsContainer.innerHTML = `<a href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <p class="post-author">${results[i].author}</p>
                                    <p class="post-date">${results[i].date}</p>
    
                                    <p>${results[i].excerpt.rendered}</p>
                                    </a>`;
    };
    postsContainer.innerHTML += `<a class="cta" href="posts-list.html">all posts</a>`;
};

renderPosts();

