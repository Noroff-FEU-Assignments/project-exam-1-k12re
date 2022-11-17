const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts?per_page=20&_embed";
const latestContainer = document.querySelector(".latest-big");
const carouselContainer = document.querySelector(".carousel");
const postsContainer = document.querySelector(".posts-slim");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");
const buttons = document.querySelector(".arrow-buttons");

//const mediaUrl = `https://autotech.kenthore.no/wp-json/wp/v2/posts/129?_embed`

async function callAPI() {
    const response = await fetch(url);
    const results = await response.json();

     renderLatest(results);
     renderCarousel(results);
     renderPosts(results);
    
    // results.forEach(thing => {
    //     console.log(thing)
        
    // });
};


callAPI();


function renderLatest(results) {
    
    latestContainer.innerHTML = "";

    latestContainer.innerHTML = `
                                <a class="heading-card" href="post.html?id=${results[0].id}">
                                <h2 class="h2">Home</h2>
                                <img class="header-big" src="${results[0]._embedded["wp:featuredmedia"][0].source_url}">
                                <h1 class="h1">${results[0].title.rendered}</h1>
                                <p class="post-author">${results[0]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
                                <p class="excerpt">${results[0].excerpt.rendered}</p>
                                </a>`;
};


function renderCarousel(results) {

    carouselContainer.innerHTML = "";
    
    for (let i = 1; i <= 3; i++) {
        carouselContainer.innerHTML += `<a class="card-slim carousel" href="post.html?id=${results[i].id}">
                                        <h2 class="h2">${results[i].title.rendered}</h2>
                                        <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                        <p class="post-author">${results[i]._embedded.author[0].name}</p>
                                        `
    };
    
    
};


function renderPosts(results) {

    postsContainer.innerHTML = "";
 
    for (let i = 4; i <= 6; i++) {
        
        // const date = results[i].date;
        // if (date.length < 10) date = date.substring(0, 10);

        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                    <p class="post-author">By: ${results[i]._embedded.author[0].name} | ${results[i].date.substring(0, 10)}</p>
                                    <p class="excerpt">${results[i].excerpt.rendered}</p>
                                    </a>`;
    };
    postsContainer.innerHTML += `<a class="cta" href="posts-list.html">all posts</a>`;
};



    // card.src = carouselContainer[0];
    // let position = 0;


    // const left = () => {
    //     if (position >= carouselContainer.length - 1) {
    //         position = 0
    //         card.src = carouselContainer[position];
    //         return;
    //     }
    //     card.src = carouselContainer[position + 1];
    //     position++;
    // }

    // const right = () => {
    //     if (position < 1) {
    //         position = carouselContainer.length - 1;
    //         card.src = carouselContainer[position];
    //         return;
    //     }
    //     card.src = carouselContainer[position - 1];
    //     position--;
    // };

    // leftButton.addEventListener("click", left);
    // rightButton.addEventListener("click", right);
    
