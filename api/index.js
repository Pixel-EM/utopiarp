const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

const authRoute = require('./routes/auth')
const vipRoute = require('./routes/vip')
const veiculoRoute = require('./routes/veiculosvip')
const outrosRoute = require('./routes/outros')
const vendaRoute = require('./routes/venda')

dotenv.config()



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(console.log('Connected at your database.'))
    .catch((err)=> console.log(err))

const app = express()
const port = process.env.PORT || 5000

// Cros-origin middleware
app.use(cors())
// Translate the requests to json
app.use(express.json())



//Routes
app.use('/api/auth', authRoute)
app.use('/api/cvip', veiculoRoute)
app.use('/api/donate', vipRoute)
app.use('/api/outros', outrosRoute)
app.use('/api/admin', vendaRoute)

app.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
})