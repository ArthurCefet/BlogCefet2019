
const ListarUmUsuarioByID = require('./models/usuario/action/ListarUmUsuarioByID')
const express = require('express');
const exp = express();
const Usuario = require('./models/bd/table/Usuario')


exp.get("/",(req,res) => {
    Usuario.findAll().then((Usuario) => {
    res.send(JSON.stringify(Usuario,null,4))
    })
  })

exp.get("/Inserir",(req,res)=>{
    
})

exp.listen(8081,function(){
    console.log("Servido rodando na porta 8081");
  });