const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts?per_page=20&_embed";
const latestContainer = document.querySelector(".latest-big");
const carouselContainer = document.querySelector(".carousel");
const postsContainer = document.querySelector(".posts-slim");

//const mediaUrl = `https://autotech.kenthore.no/wp-json/wp/v2/posts/129?_embed`

async function callAPI() {
    const response = await fetch(url);
    const results = await response.json();
    
    //const mediaResponse = await fetch(mediaUrl);
    //const mediaResults = await mediaResponse.json();

    renderLatest(results);
    renderPosts(results);

    
    
};

callAPI();

function renderLatest(results) {
    
    latestContainer.innerHTML = "";

    latestContainer.innerHTML = `<h2 class="h2">Latest</h2>
                                <a class="heading-card" href="post.html?id=${results[0].id}">
                                <h2 class="h2">${results[0].title.rendered}</h2>
                                <p class="post-author">${results[0].author}</p>
                                <p class="post-date">${results[0].date}</p>
                                <img class="header-big" src="${results[0]._embedded["wp:featuredmedia"][0].source_url}">
                                <p>${results[0].excerpt.rendered}</p>
                                </a>`;


};



function renderPosts(results) {

    console.log(results);

    postsContainer.innerHTML = "";

    for (let i = 1; i < results.length; i++) {
        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <p class="post-author">${results[i].author}</p>
                                    <p class="post-date">${results[i].date}</p>
                                    <img class="header-big" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                    <p>${results[i].excerpt.rendered}</p>
                                    </a>`;
    };
    postsContainer.innerHTML += `<a class="cta" href="posts-list.html">all posts</a>`;
};
