const mapElement = document.getElementById("map");
const infoName = document.getElementById("infoName");
const infoDescription = document.getElementById("infoDescription");
const infoCharactersTitle = document.getElementById("infoCharactersTitle");
const infoCharacters = document.getElementById("infoCharacters");

characters.forEach(character => {
    if (character.location && location[character.location]) {
        if (location[character.location].characters) {
            locations[character.location].characters.push(character);
        } else {
            locations[character.location].characters = [character];
        }
    } else {
        console.log(character.name + " is not at a valid location.");
    }
});

let clickSelection = null;
let lastSelection = null;

Object.keys(locations).sort((a,b)=>locations[a].position.y - locations[b].position.y) // if two locations hitboxes overlap, prioritize the one farther down (because the hitboxes extend down more, for characters)
    .forEach(name => {
    let location = locations[name];
    location.name = name;
    let locationElement = document.createElement("div");
    location.element = locationElement;
    locationElement.className = "location";
    locationElement.style.left = location.position.x*2 + "px";
    locationElement.style.top = location.position.y*2 + "px";
    if (location.characters) {
        location.characters.forEach(character => {
            let characterElement = document.createElement("div");
            characterElement.className = "character";
            characterElement.style.background = "url(\"chars/" + character.icon + ".png\")";
            locationElement.appendChild(characterElement);
        });
    } else {
        location.characters = [];
    }
    mapElement.appendChild(locationElement);
    locationElement.addEventListener("mouseover", showLocationInfo.bind(location));
    locationElement.addEventListener("click", (event) => {
        if (lastSelection) {
            lastSelection.element.className = lastSelection.element.className.replace(/ active/g, "");
        }
        lastSelection = location;
        clickSelection = location;
        locationElement.className += " active";
        showLocationInfo.call(location);
        event.stopPropagation();
    });
    locationElement.addEventListener("mouseout", resetLocationInfo);
});

mapElement.addEventListener("click", () => {
    if (lastSelection) {
        lastSelection.element.className = lastSelection.element.className.replace(/ active/g, "");
    }
    lastSelection = null;
    clickSelection = null;
    resetLocationInfo();
},true);

function showLocationInfo(event) {
    infoName.innerText = this.name;
    infoDescription.innerText = this.description;
    if (this.characters.length > 0) {
        infoCharactersTitle.innerText = "Characters";
        infoCharacters.innerHTML = "";
        this.characters.forEach(character => {
            let characterElement = document.createElement("li");
            characterElement.className = "character";
            characterElement.style.background = "url(\"chars/" + character.icon + ".png\")";
            characterElement.textContent = character.name;
            infoCharacters.appendChild(characterElement);
        });
    } else {
        infoCharactersTitle.innerText = "";
        infoCharacters.innerHTML = "";
    }
}

function resetLocationInfo() {
    if (clickSelection) {
        showLocationInfo.call(clickSelection);
    } else {
        infoName.innerText = "Location Info";
        infoDescription.innerText = "Hover or click on a location to see information about it.";
        infoCharactersTitle.innerText = "";
        infoCharacters.innerHTML = "";
    }
}