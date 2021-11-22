let Pokemons = [];
let botaoListar = document.querySelector("#post");
botaoListar.addEventListener("click", () => {
  lista = document.querySelector("#pokelist");
  fetch("https://projetofinal-ppw.herokuapp.com/api/119706", {
    method: "GET",
  }).then((resposta) => {
    resposta.json().then((vetorPokemons) => {
      console.log(vetorPokemons);
      Pokemons = vetorPokemons;

      AttListaPoke();
    });
  });

  function AttListaPoke() {
    lista.innerHTML = "";

    for (let pokemon of Pokemons) print(pokemon);
  }

  function print(pokemon) {
    let div = document.querySelector("div");
    let pokelist = document.createElement("div");
    pokelist.textContent = `${pokemon.name} - ${pokemon.type}`;
    div.appendChild(pokelist);
  }
});
