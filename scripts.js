function authorize() {
    var enteredCode = document.getElementById("trainerCode").value;
    var correctCode = "pikachu123";

    if (enteredCode === correctCode) {
        document.getElementById("authorization").style.display = "none";
        document.getElementById("authorizedContent").style.display = "block";
        document.getElementById("unauthorizedContent").style.display = "none";
    } else {
        document.getElementById("unauthorizedContent").style.display = "block";
    }
}

function showDetails(pokemon) {
    var popupContent = "<img src='" + pokemon.toLowerCase() + ".png' alt='" + pokemon + "' class='pokemon-image'>";
    popupContent += "<p>You've chosen " + pokemon + " as your starter Pokémon!</p>";
    popupContent += "<p>Type(s): " + getTypes(pokemon).join(", ") + "</p>";
    popupContent += "<p>Abilities: " + getAbilities(pokemon).join(", ") + "</p>";
    popupContent += "<button class='button' onclick='closePopup(); showCongrats(\"" + pokemon + "\")'>Pick</button>";
    document.getElementById("popup").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showCongrats(pokemon) {
    document.getElementById("congratulatoryMessage").style.display = "block";
    document.getElementById("starterPokemon").src = pokemon.toLowerCase() + ".png";
    document.getElementById("starterPokemon").alt = pokemon;
    document.getElementById("starterPokemonName").innerText = pokemon;
}

function getTypes(pokemon) {
    const types = {
        Squirtle: ["Water"],
        Charmander: ["Fire"],
        Torchic: ["Fire"],
        Bulbasaur: ["Grass", "Poison"]
    };
    return types[pokemon];
}

function getAbilities(pokemon) {
    const abilities = {
        Squirtle: ["Hydro Pump", "Water Gun", "Withdraw"],
        Charmander: ["Flamethrower", "Ember", "Scratch"],
        Torchic: ["Ember", "Peck", "Growl"],
        Bulbasaur: ["Vine Whip", "Razor Leaf", "Growth"]
    };
    return abilities[pokemon];
}
