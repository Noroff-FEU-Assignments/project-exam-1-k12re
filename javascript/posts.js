const postsContainer = document.querySelector(".posts-card");

function renderPosts(results) {

    console.log(results);

    postsContainer.innerHTML = "";

    for (let i = 1; i < results.length; i++) {
        postsContainer.innerHTML += `<a class="card-slim" href="post.html?id=${results[i].id}">
                                    <h2 class="h2">${results[i].title.rendered}</h2>
                                    <img class="card-slim" src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
                                    <p class="post-author">${results[i]._embedded.author[0].name}</p>
                                    <p class="post-date">${results[i].date}</p>
                                    <p class="excerpt">${results[i].excerpt.rendered}</p>
                                    </a>`;
    };
};