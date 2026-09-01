
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

function buscarRaca() {
    const raca = inputRaca.value; 
    const url = `https://dog.ceo/api/breed/${raca}/images/random`;
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

const botaoRaca = document.querySelector("#btraca");
const inputRaca = document.querySelector("#raca");
botaoRaca.addEventListener("click",buscarRaca);