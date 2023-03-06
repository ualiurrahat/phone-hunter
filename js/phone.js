// function to load phones
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {
    console.log(phones);
    // 1. get phones container
    const phonesContainer = document.getElementById("phones-container");
    // for each search result, remove previous result and show just current result.
    // so emptying the innertext of phonesContainer
    phonesContainer.innerText = "";
    // 2. create div for each phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement("div");
        // add col class to div
        phoneDiv.classList.add("col");
        // 3. set innertext 
        phoneDiv.innerHTML = `
         <div class="card h-100 p-4">
            <img  src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
            </div>
        </div>`;
        //4. append phoneDiv as child of conatainer div
        phonesContainer.appendChild(phoneDiv);
    });
}

// Task: show search results when search button is clicked.
document.getElementById('btn-search').addEventListener('click', function(){
    //1. take input search value from search input field
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // 2. empty search string after a search text is taken and being worked.
    searchField.value = "";
    // 3. call loadphones() funciton to show new result
    loadPhones(searchText);
})
loadPhones('iphone');