const router = require('express').Router()
const Outros = require('../models/Outros')


router.post('/', async (req, res)=>{
    const newOutros = new Outros({
        nome: req.body.nome,
        valor: req.body.valor
    })

    try{
        const savedOutros = await newOutros.save()
        res.status(200).json(savedOutros)
    }catch(err){ res.status(500).json(err) }
})

router.get('/', async (req, res)=>{
    try{
        const outros = await Outros.find().sort({valor: 1})
        res.status(200).json(outros)
    }catch(err){ res.status(500).json(err) }
})

module.exports = router