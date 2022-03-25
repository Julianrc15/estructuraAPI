const express = require('express') 

require('dotenv').config()
console.log(process.env.PORT) 

const app = express()



app.get('/api/v1/viernes', function (req, res) {
  res.send('Hello World, Im Get')
})

app.post('/api/v1/viernes', function (req, res) {
    res.send('Hello World, Im post')
  })

app.put('/api/v1/viernes', function (req, res) {
    res.send('Hello World, Im Put')
  })

app.delete('/api/v1/viernes', function (req, res) {
    res.send('Hello World, Im delete')
  })

app.listen(process.env.PORT,function(){
    console.log("Servidor en servicio")
})

//variables de entorno, son variables del servidor que no dependen del programador, ejemplo, puerto, nombre base de datos.