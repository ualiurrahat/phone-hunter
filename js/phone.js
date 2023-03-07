// function to load phones
const loadPhones = async (searchText,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones,dataLimit) => {
    console.log(phones);
    // 1. get phones container
    const phonesContainer = document.getElementById("phones-container");
    // for each search result, remove previous result and show just current result.
    // so emptying the innertext of phonesContainer
    phonesContainer.innerText = "";
    // display first 10 phones only and show all button
    const showAll = document.getElementById("show-all");
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove("d-none");
    }
    else {
        showAll.classList.add("d-none");
    }

    // no results display container 
    const noResultDiv = document.getElementById("no-results-msg");
    // condition to check if no results is found for any query
    // then phones array will be empty
    if (phones.length === 0) {

        noResultDiv.classList.remove("d-none");
    }
    else {
        noResultDiv.classList.add("d-none");
    }
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
                <button onclick = "loadPhoneDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
        </div>`;
        //4. append phoneDiv as child of conatainer div
        phonesContainer.appendChild(phoneDiv);
    });
    // stop loading spinner
    toggleSpinner(false);
}

// function to perform search process when search button is clicked
const processSearch = (dataLimit) =>{
    // show loading spinner
    toggleSpinner(true);
    //1. take input search value from search input field
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // 2. empty search string after a search text is taken and being worked.
    // searchField.value = "";
    // 3. call loadphones() funciton to show new result
    loadPhones(searchText,dataLimit);
}
// Task: show search results when search button is clicked.
document.getElementById('btn-search').addEventListener('click', function () {
    // first show 10 results only. so sending 10 as parameter
    processSearch(10);
});
// show search result when enter is clicked on keyboard after search query is written.
// Get the input field
var input = document.getElementById("search-field");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // show search query result
    processSearch(10);
  }
});

// function to show loading spinner when a search query is made.
const toggleSpinner = isLoading => {
    const loadSection = document.getElementById("loader");
    // loading is true. means search has started. so shwo load spinner
    if (isLoading) {
        loadSection.classList.remove("d-none");
    }
    // loading is false. so search result is being shown. stop spinner
    else {
        loadSection.classList.add("d-none");
    }
}


// function to add even handler on show-all button
document.getElementById("btn-show-all").addEventListener('click', function(){
    // show-all button will show all resutls. so no parameter is taken inside processSearch() function
   processSearch();
})

// function to add event handler to show details button
const loadPhoneDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

// loadPhones();