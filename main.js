"use strict";

const characters = [
  "Aragorn",
  "Boromir",
  "Frodon",
  "Gandalf",
  "Gimli",
  "Legolas",
  "Merry",
  "Pipin",
  "Sam",
];

let select, team;
let selected = null;

// cette fonction sert à ajouter les éléments d'un tableau dans une liste déroulante select
// la value correspond à la valeur qui sera envoyée au formulaire
function addCharacters() {
  characters.forEach((perso, index) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${index}">${perso}</option>`
    );
  });
}

// si selected (valeur select.value) == index alors on ajoute la class selected à
function displayCharacters() {
  team.innerHTML = "";
  characters.forEach((perso, index) =>
    team.insertAdjacentHTML(
      "beforeend",
      `<li><img ${
        selected == index ? "class='selected'" : ""
      } src="img/${perso}.jpeg"></li>`
    )
  );
}

// select.value correspond au personnage sélectionné
function selectKeeper() {
  selected = select.value;
  displayCharacters();
}

document.addEventListener("DOMContentLoaded", function () {
  team = document.querySelector("#team");
  select = document.querySelector("select");
  document
    .querySelector("input[type=button]")
    .addEventListener("click", selectKeeper);
  addCharacters();
  displayCharacters();
});
