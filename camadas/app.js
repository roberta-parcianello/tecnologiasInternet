let express = require('express');
let produtoRoutes = require('./routes/produtoRoutes');

let app = express();

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.listen(8080, function(){
    console.log('servidor rodando na porta 8080');
});


