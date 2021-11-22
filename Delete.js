let botao = document.querySelector("#post"); //selecionando um botão
botao.addEventListener("click", (Poke) => {
  let urlDelete = "https://projetofinal-ppw.herokuapp.com/api/119706/" + PokeID;
  console.log(`Deletando da Pokedex...`);
  fetch(urlDelete, {
    method: "DELETE",
  }).then((resposta) => {
    if (resposta.status == 200) alert(`Pokemon excluido com sucesso!`);
    else if (resposta.status == 400)
      alert(`Houve um problema ao excluir o Pokemon da Pokedex!`);
  });
});
