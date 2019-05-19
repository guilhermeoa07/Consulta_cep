const router = require('express').Router();
const Cep = require('../models/ceps');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/', async (req, res) => {
    try {
        const cep = await Cep.create(req.body);
        return res.send({ cep })
    } catch (err) {
        res.status(400).send({ erro: 'Erro ao Salvar o Cep' });
    }
});

router.get('/', async (req, res) => {
    res.status(200).send({ Res: 'OK', id: req.userId});
})

module.exports = app => app.use('/cep', router);