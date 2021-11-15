const mongoose = require('mongoose')

const VehsSchema = new mongoose.Schema({
    veh1:{
        type: String
    },
    veh2:{
        type: String
    },
    veh3:{
        type: String
    },
    veh4:{
        type: String
    },
    veh5:{
        type: String
    },
    veh6:{
        type: String
    },
    veh7:{
        type: String
    },
    veh8:{
        type: String
    },
    veh9:{
        type: String
    },
    veh10:{
        type: String
    }

})

const TipoSchema = new mongoose.Schema({
    salario: {
        type: String,
    },
    dinheiro: {
        type: String,
    },
    vagas: {
        type: String,
    },
    tagdiscord: {
        type: String,
    },
    prioridade: {
        type: String,
    },
    casa: {
        type: String,
    },
    mochila: {
        type: String,
    },
    instagram: {
        type: String,
    },
    placa: {
        type: String
    },
    veiculos : VehsSchema
})

const VipSchema = new mongoose.Schema({
    tipo:{
        nome: {
            type: String,
        },
        valorvip: {
            type: String,
        },
        detalhes: TipoSchema
    }
})


module.exports = mongoose.model('Vip', VipSchema)
