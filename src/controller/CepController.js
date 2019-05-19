const router = require('express').Router();
const Cep = require('../models/ceps');

router.post('/', async (req, res) =>{
    try{
        const cep = await Cep.create(req.body);
        return res.send( { cep } )
    } catch(err) {
        res.status(400).send({ erro: 'Erro ao Salvar o Cep' });
    }
});

module.exports = app => app.use('/cep', router);