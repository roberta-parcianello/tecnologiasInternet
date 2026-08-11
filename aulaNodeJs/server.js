let http = require('http');

function atenderRequisicao(req,res){
    let url = new URL(req.url, `http://${req.headers.host}`);
    let nome = url.searchParams.get('nome');
    res.end(`GET recebido! Ola ${nome}`);
}

let servidor = http.createServer(atenderRequisicao).listen(8080);

/*let servidor = http.createServer(
    function (req, res){
        res.writeHead(200,{"content-type":'text/plan; charset=utf-8'});

    }
).listen(8080);*/

