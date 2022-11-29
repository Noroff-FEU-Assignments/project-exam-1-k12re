const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts?_embed&per_page=10";
const postsContainer = document.querySelector(".posts-card");
const postsLoadMore = document.querySelector(".posts-load-more")

async function renderPostsList(url) {

    const response = await fetch(url);
    const results = await response.json();

    postsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h1 class="h1">${results[i].title.rendered}</h1>
                                    <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                    <p class="post-author">${results[i]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
                                    <p class="excerpt">${results[i].excerpt.rendered}</p>
                                    </a>`;  
                                    
                                    // if(i === 9) {
                                    //     break;
                                    // }
    };

    postsLoadMore.innerHTML = `<a class="cta" href="posts-list.html">load more</a>`;
    const cta = document.querySelector(".cta");

    postsLoadMore.onclick = function() {
        event.preventDefault();
        const newUrl = url + "&per_page=20";
        renderPostsList(newUrl);
        postsLoadMore.style.display = "none";
    }; 
};

renderPostsList(url);






