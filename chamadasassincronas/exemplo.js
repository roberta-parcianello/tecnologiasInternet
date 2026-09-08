function esperar(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("terminou");
        }, 2000);
    });
}

async function executar(){
    console.log("Começou");
    const resposta = await esperar();
    console.log(resposta);
    console.log("fim");
}

executar();