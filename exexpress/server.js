let express = require('express');
let app = express();
app.use(express.json()); //trabalhar com json no body da requisição
let produtos = []; //vetor de produtos

app.get('/',function(req,res){
    res.end('Pagina Inicial');
});

app.get('/produtos', function(req,res){
   // res.end('Listar Produtos');
   res.json(produtos);
});

//buscar produto pelo id - req.params
app.get('/produtos/:id', function(req,res){
    let id = req.params.id;
    //consulta no banco pra buscar o produto com este id
    res.end('Produto: '+id);
});

app.get('/buscar', function(req,res){
    console.log('chegou aqui');
    let nome = req.query.nome;
    let marca = req.query.marca;
    console.log(nome);
    res.end('Buscando por: '+ nome+' marca: '+ marca);
});

//envio de parametros pelo body
app.post('/produtos',function(req,res){
    let produto = req.body;
    produtos.push(produto);
    //res.end('Produto Recebido'); manda um texto pra pagina html
    res.json(produto);
});

app.listen(8080,function(){
    console.log('servidor no ar na porta 8080');
});
