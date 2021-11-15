const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    userid:{
        type: String,
        unique: true
    },
    steamhex:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilepic:{
        type: String,
        default:""
    }
    
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema)