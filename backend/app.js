const express = require('express');
const exp = express();
const Usuario = require('./models/bd/table/Usuario')
const handlebars = require('express-handlebars');

//vamos setar no express o nosso handlebars
    exp.engine('handlebars',handlebars({defaultLayout: 'main'}))
    exp.set('view engine','handlebars')

  //rotas
    exp.get("/",(req,res) => {
        Usuario.findAll().then((Usuarios) => {
        res.render('listagem',{bd_usuarios: Usuarios})
        })
    })

    exp.get("/Cadastro",(req,res)=>{
        res.send("TA FUNCIONANDO OTARIO")
    })

exp.listen(8081,function(){
    console.log("Servido rodando na porta 8081");
  });