//funcao declarada/nomeada
function soma(a, b){
    return a+ b;
}

console.log('funcao declaracao: ' + soma(2,8));

//função anonima
const somar = function (a,b){
    return a+b;
}

console.log('Funcao anonima '+somar(5,6));

//funcão Arrow
const somar2 =  (a,b) => {
    return a+b;
}

console.log('Funcao Arrow '+somar2(10,10));

//callback
function executar(funcao){
    funcao();
}

executar(function(){
    console.log("A funcao foi executada");
});

executar(()=>{
    console.log("a funcao arrow foi executada");
});