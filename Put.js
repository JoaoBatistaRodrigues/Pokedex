let botao = document.querySelector("#post"); //selecionando um botão
botao.addEventListener("click", (PokeID) => {
  let urlPut = "https://projetofinal-ppw.herokuapp.com/api/119706/" + PokeID;
  fetch(urlPut, {
    method: "PUT",
    headers: { contentType: "application/json" },
    body: JSON.stringify(NewPoke),
  }).then((resposta) => {
    if (resposta.status == 200)
      console.log(`A alteração foi feita com sucesso.`);
  });
});
