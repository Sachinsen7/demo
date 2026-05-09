import express from 'express'       
import sum from './sum.js'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/home', (req, res) => {
    res.json({ message: 'Welcome to the home page!' })
})

app.get('/sum/:a/:b', (req, res) => {


    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const result = sum(a, b)
    res.json({ result })
})