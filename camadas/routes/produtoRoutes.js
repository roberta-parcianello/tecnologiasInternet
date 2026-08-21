let express = require('express');
let produtoController = require('../controllers/produtoController');

let router = express.Router();
//executar a função listar
//produtoController.listar()
//disponibilizar a função listar
router.get('/',produtoController.listar);
router.post('/', produtoController.cadastrar);
router.get('/produto/:id', produtoController.buscar);

module.exports = router;