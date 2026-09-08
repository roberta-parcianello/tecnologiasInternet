function buscaUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const usuario = {
                nome: "Ana",
                idade:20
            };
    
            resolve(usuario);

        }, 2000);
        
    });
}

async function mostraUsuario(){
    console.log("buscando ...");
    const usuario = await buscaUsuario();
    console.log(usuario);
    console.log("Nome: ", usuario.nome);
    console.log("idade: ", usuario.idade);
}

mostraUsuario();