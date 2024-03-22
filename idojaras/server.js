const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', () => {
    app.render('index')
})

async function getData() {
    const response = await fetch('/')
    const data = await response.json()
    console.log(data)
}

getData()

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server located at: http://localhost:3000/")
})