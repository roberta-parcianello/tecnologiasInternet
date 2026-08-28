//fetch()
//função nativa que serve para fazer requisições HTTP
/* const url = "https://brasilapi.com.br/api/registrobr/v1/brasilapi.com.br";
fetch(url)
    .then((resposta)=>{
        return resposta.json();
    })
    .then((dados)=>{
    //console.log(dados);
    console.log("status: ",dados.status);
    console.log("hosts: ", dados.hosts);

});
*/

function consultaDominio(dominio){
    const url = `https://brasilapi.com.br/api/registrobr/v1/${dominio}`;
    fetch(url)
    .then((resposta)=>resposta.json())
    .then((dados)=>{
        if(dados.status==="REGISTERED"){
            console.log("domínio não está disponível");
        }else{
            console.log("dominio disponivel");
        }
    });

}
consultaDominio("roberta.prof.br");