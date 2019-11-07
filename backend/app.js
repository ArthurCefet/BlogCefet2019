const express = require('express');
const exp = express();
//a conexão com o banco de dados é feita dentro do Usuario.js 
const Usuario = require('./models/bd/table/Usuario');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//vamos setar no express o nosso handlebars
    //main.handlebars é o layout padrão, o corpo do html é feito nele
    exp.engine('handlebars',handlebars({defaultLayout: 'main'}))
    exp.set('view engine','handlebars')

//bodyparser é usado para converter dados de uma requisição
    //nesse caso é convertido os dados da requisicao para json
    exp.use(bodyParser.json())

  //rotas 
    //() => {}  function(req,res){}
    exp.get("/",(req,res) => {
        Usuario.findAll({order: [['id','DESC']]}).then((Usuarios) => {
        res.render('listagem',{bd_usuarios: Usuarios})
        }).catch((e) => {
            console.log("Erro ao mostrar usuarios." + e)
        })
    })

    exp.get("/Cadastro",(req,res)=>{
        //o render diz que arquivo deve ser exibido(renderizado) no layout padrão (main)
        res.render('formulario')
    })
    //request>body>name
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

    exp.get("/atualizar/:id",(req,res)=>{
        Usuario.findOne({where:{id: req.params.id}}).then((usuario) => {
            res.render('atualizar',{usuario:usuario})
        }).catch((e)=>{
            res.send("Falha ao atualizar."+e)
        })
    })

    exp.post("/atualizar",(req,res) =>{
        Usuario.findOne({where:{id: req.body.id}}).then((usuario)=>{
            usuario.NomeDeLogin = req.body.NomeDeLogin
            usuario.Email = req.body.Email
            usuario.Senha = req.body.Senha

            usuario.save().then(()=>{
                res.redirect('/')
            }).catch((e)=>{
                res.send("Falha ao atualizar."+e)
            })

        }).catch((e)=>{
            res.send("Falha ao atualizar."+e)
        })
    })

exp.listen(8081,() => {
    console.log("Servido rodando na porta 8081");
  });