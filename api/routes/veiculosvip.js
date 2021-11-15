const mongoose = require('mongoose')
const router = require('express').Router()
const Veiculo = require('../models/Veiculo')


// ADICIONAR NOVO VEÍCULO
router.post('/', async (req, res) =>{
    const newVeiculo = new Veiculo({
        nome: req.body.nome,
        nomecarro: req.body.nomecarro,
        tipo: req.body.tipo,
        valor: req.body.valor,
        foto: req.body.foto
    })
    try{        
        const savedVeiculo = await newVeiculo.save()
        res.status(200).json(savedVeiculo)
    }catch(err){ res.status(500).json(err) }
})

// ATUALIZAR VEICULO - ALTERAR PREÇO, NOME, ETC...
router.put('/:id', async (req, res) =>{
        try {
                const updatedVeiculo = await Veiculo.findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    }, { new: true })
                res.status(200).json(updatedVeiculo)
            }catch (err){ res.status(500).json(err) }
})

// DELETAR VEICULO
router.delete('/:id', async (req, res) => {
    try {
        const deleteVeiculo = await Veiculo.findById(req.params.id)
        try{
                deleteVeiculo.delete()
                res.status(200).json('Veículo removido com sucesso.')
        }catch(err){ res.status(404).json(err) }
    } catch (err) { res.status(500).json(err) }
})

// GET VEICULO

router.get('/:id', async (req, res) => {
    try{
        const getVeiculo = await Veiculo.findById(req.params.id)
        res.status(200).json(getVeiculo)
    }catch(err){ res.status(404).json('Não foi possível encontrar essa ID em veículos.') }
})

// GET TODA O DB DE VEÍCULOS

router.get('/', async (req, res) => {
    const veiculos = await Veiculo.find().sort({ valor: 1})
    res.status(200).json(veiculos)
})

module.exports = router