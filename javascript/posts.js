const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts?per_page=10&_embed";
const postsContainer = document.querySelector(".posts-card");
const postsLoadMore = document.querySelector(".posts-load-more")
// const cta = document.querySelector(".cta");

async function renderPostsList() {

    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    postsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                    <p class="post-author">${results[i]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
                                    <p class="excerpt">${results[i].excerpt.rendered}</p>
                                    </a>`;

                                  
    };

    



};
renderPostsList();

postsLoadMore.innerHTML += `<a class="cta" href="posts-list.html?per_page=20">load more</a>`;


postsLoadMore.onclick = function() {
    const newUrl = url + "?perpage=20&_embed";
    renderPostsList(newUrl)
    
};

console.log(postsLoadMore)


