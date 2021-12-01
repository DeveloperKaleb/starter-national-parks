/*const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice (0, 250);
        content = content + '<a href="#">...</a>';
    }

    desc.innerHTML = content;
}

const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

const nameSorter = document.querySelector("#name-sorter");

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    
    const main = document.querySelector("main");

    const parksList = main.querySelectorAll(".park-display");

    main.innerHTML = "";

    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    })

    parksArray.forEach((park) => {
        main.appendChild(park);
    })
})

const ratingSorter = document.querySelector("#rating-sorter");

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();

    const main = document.querySelector("main");

    const parksList = main.querySelectorAll(".park-display");

    main.innerHTML = "";

    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkARating = parkA.querySelector(".rating-display .value").innerText;
        const parkBRating = parkB.querySelector(".rating-display .value").innerText;
        ;
        if (parkARating < parkBRating) {
            return -1;
        } else if (parkARating > parkBRating) {
            return 1;
        } else {
            return 0;
        }
    })

    parksArray.forEach((park) => {
        main.appendChild(park);
    })
})
*/
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded!");
})

console.log("After!");