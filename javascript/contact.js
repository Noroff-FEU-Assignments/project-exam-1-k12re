const pageUrl = "https://autotech.kenthore.no/wp-json/wp/v2/pages";
const pageContainer = document.querySelector(".page")

async function callContact() {
    const response = await fetch(pageUrl);
    const results = await response.json();

     console.log(results);

     pageContainer.innerHTML += "";

     pageContainer.innerHTML += `<h2 class="h2">${results[0].title.rendered}</h2>
                                <p>${results[0].content.rendered}</p>`
};


callContact();