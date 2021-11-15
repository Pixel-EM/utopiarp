const mongoose = require('mongoose')

const VeiculoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
        },
    nomecarro:{
        type: String,
        required: true
    },
    tipo:{

        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    foto:{
        type: String,
        default: ""
    }
}, { timestamp: true })

module.exports = mongoose.model('Veiculo', VeiculoSchema)