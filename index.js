import express from 'express'
import routes from './src/routes/crmRoutes.js'
import mongoose from 'mongoose'
import bodyParser  from 'body-parser'
import cors from 'cors'
const app =express()
//mongoose connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.rmekg.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
//express

const PORT =process.env.PORT|| 4000
routes(app)
app.get('/',(req,res)=>{
    res.send(`node and express server running at ${PORT}`)
})
app.listen(PORT,()=>{
    console.log(`App listening at Port:${PORT}`)
})
