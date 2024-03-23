const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', { title: 'Időjárás' })
})

app.get('/api', (req, res) => {
    fetch("https://api.infojegyzet.hu/idojaras/")
    .then(response => response.json())
    .then(data => {
        res.send(JSON.stringify(data))
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server located at: http://localhost:3000/")
})