const router = require('express').Router();
const Cep = require('../models/ceps');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/', async (req, res) => {
    try {
        const cep = await Cep.create(req.body);
        return res.send({ cep })
    } catch (err) {
        res.status(400).send({ erro: 'Erro ao Salvar o Cep', err });
    }
});

router.get('/', async (req, res) => {
    const ceps = await Cep.find();
    if(!ceps) return res.status(200).send("Nenhum CEP cadastrado.");
    return res.status(200).send({ ceps });
});


router.get('/:cep', async (req, res) => {
    const { cep } = req.params;
    await Cep.find({ 'cep': cep}, (err, value) =>{
        if(err) return res.status(400).send(err);
        else  return (res.json(value));
    });
});

router.get('/id/:id', async (req,res) => {
    const { id } = req.params;
    await Cep.findById(id, (err, value) => {
        if(err) return res.status(400).send(err);
        else return (res.json(value));
    });
});

router.get('/cidade/:cidade', async (req, res) => {
    const { cidade } = req.params;
    await Cep.find({'cidade': cidade }, (err, value) => {
        if(err) return res.status(400).send(err);
        else return(res.json(value));
    })
});

router.get('/buscar/:logradouro', async (req, res) => {
    const { logradouro } = req.params;
    buscaLogradouro =  logradouro.split('_');
    if(!buscaLogradouro) return res.send(200).send('Parametro invalido');
    else {
        buscaLogradouro.forEach(element => {
            
        });
    }
    console.log(buscaLogradouro);
    return res.status(200).send('Ok');
});

module.exports = app => app.use('/cep', router);