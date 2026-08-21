let produtos = [];

function listar(req, res){
    res.json(produtos);
}

function cadastrar(req, res){
    produtos.push(req.body);
    res.send('Produto Cadastrado');
}

function buscar(req, res){
    let id = req.params.id;
    res.json(produtos[id]);
}

module.exports = {
    listar,
    cadastrar,
    buscar
};