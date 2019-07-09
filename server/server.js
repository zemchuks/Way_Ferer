import express from 'express'
import bodyParser from 'body-parser'

import v1Router  from './routes'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', v1Router)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to way_ferer API'})
})

const port = 8080
app.listen(port, () => {
    console.log(`App listening on ${port}`)
})