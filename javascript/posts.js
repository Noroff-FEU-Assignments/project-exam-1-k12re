const url = "https://autotech.kenthore.no/wp-json/wp/v2/posts?per_page=20&_embed";
const postsContainer = document.querySelector(".posts-card");

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

                                    if (i === 9) {
                                        break
                                    }
    };


    postsContainer.innerHTML += `<a class="cta" href="posts-list.html?per_page=20">load more</a>`;

    
        // postsContainer.onclick = (loadMore()) => {
        //     for (let i = 9; i < results.length; i++) {
        //         postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
        //                             <h2 class="h2">${results[i].title.rendered}</h2>
        //                             <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
        //                             <p class="post-author">${results[i]._embedded.author[0].name} | ${results[0].date.substring(0, 10)}</p>
        //                             <p class="excerpt">${results[i].excerpt.rendered}</p>
        //                             </a>`;
        //     }
        // }
    
};

renderPostsList();
