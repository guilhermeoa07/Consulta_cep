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

router.get('/:cep', async (req, res) => {
    const { cep } = req.params;
    console.log(cep);
    const ceps = await Cep.find({ cep });
    if (!ceps)
        return res.status(404).send({ Erro: 'Cep não encontrado.' });
    res.status(200).send(ceps);
})

module.exports = app => app.use('/cep', router);