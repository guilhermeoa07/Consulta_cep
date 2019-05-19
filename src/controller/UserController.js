const router = require('express').Router();
const User = require('../models/user');

router.post('/', async (req, res) =>{
    try{
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send( { user } )
    } catch(err) {
        res.status(400).send({ Erro : err } );

    }
});

module.exports = app => app.use('/user', router);