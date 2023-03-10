const express = require('express');
const app = express();
const db = require('./db/connections');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express est? rodando na porta ${PORT}`);
});
//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//db connection
db 
 .authenticate()
 .then(() => {
    console.log("Conectou ao banco com sucesso");
 })
 .catch(err => {
   console.log("Ocorreu um erro ao conectar", err);
 });

//routes
app.get('/',(req,res) => {
    res.send("Est? funcionando Jackson");
});

//"dev": "nodemon app.js"