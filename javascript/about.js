const pageUrl = "https://autotech.kenthore.no/wp-json/wp/v2/pages";
const pageContainer = document.querySelector(".page")

async function callAbout() {
    const response = await fetch(pageUrl);
    const results = await response.json();

     console.log(results);

     pageContainer.innerHTML = "";

     pageContainer.innerHTML = `<h2 class="h2">${results[1].title.rendered}</h2>
                                <p>${results[1].content.rendered}</p>`
};


callAbout();
