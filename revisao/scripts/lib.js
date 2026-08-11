function helloWorld(){
    alert("Hello World")
}

function mordeMaca(){
    const imagemMaca = document.getElementById("maca");
    imagemMaca.src = "imgs/maca5.gif";
    alert("informacao");
}

let numeroImagem = 1;
function mordeMaca1(){
    numeroImagem++;
    
    if (numeroImagem>5){
        numeroImagem = 1;
    }
    const imagemMaca = document.getElementById("maca1");
    imagemMaca.src = `imgs/maca${numeroImagem}.gif`;
   // alert(imagemMaca.src);
}

function trocarImagem(nomeImagem){
    const imagemMaca = document.getElementById("maca2");
   // alert(nomeImagem);
    imagemMaca.src = `imgs/${nomeImagem}`;
}

//declarando variaveis javascript
var nomeVar = "Fulano"; //escopo global - ruim
let idadevar = 20; //escopo de bloco
const PI = 3.14; //escopo de bloco

function tipos(){
    let nome = document.getElementById("nome").value;
    alert("nome "+typeof(nome));

    let idade = Number(document.getElementById("idade").value);
    // ou parseInt()
    alert("idade " + typeof idade);


    let salario = parseFloat(document.getElementById("salario").value);
    alert("salario "+typeof salario+ " "+salario);
}

function somar(){
   let v1 = Number(document.getElementById("n1").value);
   let v2 = Number(document.getElementById("n2").value);

    let result = v1+v2;

    document.getElementById("resultado").textContent = "Resultado: "+result;
}

function subtrair(){
    let v1 = Number(document.getElementById("n1").value);
    let v2 = Number(document.getElementById("n2").value);
    let result = v1-v2;

    document.getElementById("resultado").textContent = "Resultado: "+result;
}

function multiplicar(){
    let v1 = Number(document.getElementById("n1").value);
    let v2 = Number(document.getElementById("n2").value);
    let result = v1*v2;

    document.getElementById("resultado").textContent = "Resultado: "+result;
}

function dividir(){
    let v1 = Number(document.getElementById("n1").value);
    let v2 = Number(document.getElementById("n2").value);
    let result = v1/v2;

    document.getElementById("resultado").textContent = "Resultado: "+result;
}