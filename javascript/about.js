import errorMsg from "./error.js";

const pageUrl = "https://autotech.kenthore.no/wp-json/wp/v2/pages";
const pageContainer = document.querySelector(".page");
const errorContainer = document.querySelector(".error");

async function callAbout() {

    try {
        const response = await fetch(pageUrl);
        const results = await response.json();
    
         pageContainer.innerHTML = "";
    
         pageContainer.innerHTML = `<h1 class="h1">${results[1].title.rendered}</h1>
                                    <p>${results[1].content.rendered}</p>`
    } catch {
        const error = errorMsg("error");
        pageContainer.innerHTML = error;
    };
};

callAbout();