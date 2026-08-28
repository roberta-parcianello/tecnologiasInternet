//fetch()
//função nativa que serve para fazer requisições HTTP
const url = "https://brasilapi.com.br/api/registrobr/v1/brasilapi.com.br";
fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
    //console.log(dados);
    console.log("status: ",dados.status);
    console.log("hosts: ", dados.hosts);

});