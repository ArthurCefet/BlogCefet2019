const express = require('express');
const exp = express();
const Usuario = require('./models/bd/table/Usuario');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//vamos setar no express o nosso handlebars
    exp.engine('handlebars',handlebars({defaultLayout: 'main'}))
    exp.set('view engine','handlebars')
    //configurando bodyParse
    exp.use(bodyParser.urlencoded({extended:false}))
    exp.use(bodyParser.json())

  //rotas 
    exp.get("/",(req,res) => {
        Usuario.findAll({order: [['id','DESC']]}).then((Usuarios) => {
        res.render('listagem',{bd_usuarios: Usuarios})
        })
    })

    exp.get("/Cadastro",(req,res)=>{
        res.render('formulario')
    })

    exp.post("/add",(req,res)=>{
        Usuario.create({
            NomeDeLogin:req.body.NomeDeLogin,
            Email:req.body.Email,
            Senha:req.body.Senha
        }).then(() =>{
            res.redirect("/")
        }).catch((e)=>{
            res.send("Falha ao cadastrar."+e)
        })
        
        
    })

exp.listen(8081,function(){
    console.log("Servido rodando na porta 8081");
  });