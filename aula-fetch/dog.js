
function buscarDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then((resposta) => {
            return resposta.json();
        })
        .then((dados) => {
            console.log(dados);
            const foto = document.querySelector("#foto");
            foto.src=dados.message;
        });

}

const botao = document.querySelector("#btbuscar");
botao.addEventListener("click",buscarDog);