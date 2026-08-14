let http = require('http');

let servidor = http.createServer(
    function(req,res){
        if(req.method ==='GET' && req.url === '/'){
            res.end('Página inicial');
        }else if(req.method === 'GET' && req.url === '/produtos'){
            res.end('Lista de Produtos');
        }else if(req.method === 'POST' && req.url === '/produtos'){
            res.end('Cadastro de Produtos');
        }else if(req.method === 'DELETE' && req.url === '/produtos'){
            res.end('Deletar produtos');
        }else if(req.method ==='GET' && req.url==='/clientes'){
            res.end('Lista de Clientes');
        }else {
           // res.statusCode = 404;
            //res.end('Pagina nao encontrada');
            res.statusCode = 302;
            res.setHeader('Location','https://http.dog/404');
            res.end();
            console.log('deu ruim');
        }
        
    }
);

servidor.listen(8080);
console.log('servidor no ar na porta 8080');