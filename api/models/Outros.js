const mongoose = require('mongoose')


const OutrosSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    valor:{
        type: String
    }

})

module.exports = mongoose.model('Outros', OutrosSchema)