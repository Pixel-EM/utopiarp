const mongoose = require('mongoose')
const router = require('express').Router()
const Vip = require('../models/Vips')

router.post('/', async (req, res) =>{
    const newVip = new Vip({
        tipo: {
            nome: req.body.nome,
            valorvip: req.body.valorvip,
            detalhes: {
                salario: req.body.detalhes.salario,
                dinheiro: req.body.detalhes.dinheiro,
                vagas: req.body.detalhes.vagas,
                tagdiscord: req.body.detalhes.tagdiscord,
                prioridade: req.body.detalhes.prioridade,
                casa: req.body.detalhes.casa,
                mochila: req.body.detalhes.mochila,
                instagram: req.body.detalhes.instagram,
                placa: req.body.detalhes.placa,
                veiculos: {
                    veh1: req.body.detalhes.veiculos.veh1,
                    veh2: req.body.detalhes.veiculos.veh2,
                    veh3: req.body.detalhes.veiculos.veh3,
                    veh4: req.body.detalhes.veiculos.veh4,
                    veh5: req.body.detalhes.veiculos.veh5,
                    veh6: req.body.detalhes.veiculos.veh6,
                    veh7: req.body.detalhes.veiculos.veh7,
                    veh8: req.body.detalhes.veiculos.veh8,
                    veh9: req.body.detalhes.veiculos.veh9,
                    veh10: req.body.detalhes.veiculos.veh10
                }
            }
        }
    })
    
    
    try{
        newVip.markModified('tipo.detalhes')
        const savedVip = await newVip.save()
        res.status(200).json(savedVip)
    }catch(err){ res.status(500).json(err) }
})

// GET TODA O DB DE VEÍCULOS

router.get('/', async (req, res) => {
    const vips = await Vip.find().sort({ valor: 1})
    res.status(200).json(vips)
})

module.exports = router