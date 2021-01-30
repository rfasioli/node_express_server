import express from 'express'
import bodyParser from 'body-parser'
import mainRouter from '../routes/main'

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', mainRouter)

export default app
