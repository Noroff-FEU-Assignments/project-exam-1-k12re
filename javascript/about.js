const pageUrl = "https://autotech.kenthore.no/wp-json/wp/v2/pages";
const pageContainer = document.querySelector(".page")

async function callAbout() {
    const response = await fetch(pageUrl);
    const results = await response.json();

     pageContainer.innerHTML = "";

     pageContainer.innerHTML = `<h1 class="h1">${results[1].title.rendered}</h1>
                                <p>${results[1].content.rendered}</p>`
};

callAbout();