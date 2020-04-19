const express = require('express')
const cors = require('cors')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors())

app.use(express.static('public'))

app.listen(8080, ()=>{
    console.log("Rodando na porta 8080")
})