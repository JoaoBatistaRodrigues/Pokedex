let botao = document.querySelector("#post"); //selecionando um botão
const urlAPI = "https://projetofinal-ppw.herokuapp.com/api/119706";
botao.addEventListener("click", (event) => {
  event.preventDefault();
  let nomePoke = document.querySelector("#nome");
  let tipoPoke = document.querySelector("#tipo");
  let habiPoke = document.querySelector("#habi");
  let atackPoke = document.querySelector("#atack");
  let defensePoke = document.querySelector("#defense");
  let speedPoke = document.querySelector("#speed");
  let lifePoke = document.querySelector("#life");

  let Poke = {
    // Objeto Pokemon com os dados que serão inseridos pelo usuario
    id: "1",
    name: nomePoke.value,
    type: tipoPoke.value,
    ability: habiPoke.value,
    attack: atackPoke.value,
    defense: defensePoke.value,
    speed: speedPoke.value,
    life: lifePoke.value,
  };
  salvapokemon(Poke);
});

function salvapokemon(Poke) {
  fetch(urlAPI, {
    //requisição HTTP
    method: "POST", //Método POST para inserir um novo Pokemon
    body: JSON.stringify(Poke), //corpo da requisição com os dados anteriormente informados
    headers: { "content-type": "application/json" },
  }).then((resposta) => {
    if (resposta.status == 200) alert("Novo Pokemon cadastrado na Pokedex ");
    //mensagem para o usuario
    else if (resposta.status == 400) alert("Erro ao cadastrar novo Pokemon");
  });
}
