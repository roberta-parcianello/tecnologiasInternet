let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.end('Pagina Inicial');
});

app.get('/produtos', function(req,res){
    res.end('Listar Produtos');
});

app.post('/produtos',function(req,res){
    res.end('Cadastrar Produtos');
});

app.listen(8080,function(){
    console.log('servidor no ar na porta 8080');
});
