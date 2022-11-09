const url ="https://autotech.kenthore.no/wp-json/wp/v2/";

async function callAPI() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)
}

callAPI();