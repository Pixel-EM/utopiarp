const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema({
    produto: {
        type: String
    },
    variacao: {
        type: String
    },
    opcao:{
        type: String
    }
}, { timestamps: true })

const VendaSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    nomedocliente: {
        type: String
    },
    cpf:{
        type: String
    },
    email: {
        type: String
    },
    status:{
        type: String
    },
    totalcompra: {
        type: Number
    },
    totalliquido: {
        type: Number
    },
    situação: {
        type: Boolean
    },
    metododepagamento: {
        type: String
    },
    idplayer: {
        type: String  
    },
    discord:{
        type: String,
    },
    cupomdesconto:{
        type: String,
    },
    datacriacao:{
        type: Date,
        default: Date.now
    },
    ultimaatualizacao:{
        type: String,
        default: Date.now
    },
    comprovante: {
        type: String,
    },
    produtos: ProdutosSchema
}, { timestamps: true})

module.exports = mongoose.model('Venda', VendaSchema)