const mapElement = document.getElementById("map");
const infoName = document.getElementById("infoName");
const infoDescription = document.getElementById("infoDescription");
const infoCharactersTitle = document.getElementById("infoCharactersTitle");
const infoCharacters = document.getElementById("infoCharacters");

characters.forEach(character => {
    locations[character.location].characters.push(character);
});

let clickSelection = false;

Object.values(locations).forEach(location => {
    let locationElement = document.createElement("div");
    locationElement.className = "location";
    locationElement.style.left = location.position.x*2 + "px";
    locationElement.style.top = location.position.y*2 + "px";
    location.characters.forEach(character => {
        let characterElement = document.createElement("div");
        characterElement.className = "character";
        characterElement.style.background = "url(\"chars/" + character.icon + ".png\")";
        locationElement.appendChild(characterElement);
    });
    mapElement.appendChild(locationElement);
    locationElement.addEventListener("mouseover", showLocationInfo.bind(location));
    locationElement.addEventListener("click", () => {
        clickSelection = location;
        showLocationInfo.call(location);
    });
    locationElement.addEventListener("mouseout", resetLocationInfo);
});

mapElement.addEventListener("click", () => {
    clickSelection = false;
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