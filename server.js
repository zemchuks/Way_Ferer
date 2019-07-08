import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to way_ferer API'})
})

const port = 8080
app.listen(port, () => {
    console.log(`App listening on ${port}`)
})