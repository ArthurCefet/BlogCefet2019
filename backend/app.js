const express = require('express');
const exp = express();
const Usuario = require('./models/bd/table/Usuario');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//handlebars é um processador de template que torna a pagina dinamica
    //vamos setar no express o nosso handlebars
    exp.engine('handlebars',handlebars({defaultLayout: 'main'}))
    exp.set('view engine','handlebars')

//bodyparser é usado para converter dados de uma requisição
    //nesse caso é convertido os dados da requisicao para json
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

    //vamos criar uma rota para deletar determinado usuario pelo id
        // O valor do id é recebido via get pela URL , repare que diferente do criar usuario o parametro não é pego pelo formulario html, nessa caso o vlaor é pego na url (req.params.id)
    exp.get("/remover/:id",(req,res)=>{
        Usuario.destroy({ where: {'id':req.params.id}}).then(()=>{
            res.redirect("/")
            console.log("Sucesso ao remover o usuario de id : "+req.params.id)
        }).catch((e)=>{
            console.log("ERROR AO DELETAR . "+ e)
        })
    })



exp.listen(8081,function(){
    console.log("Servido rodando na porta 8081");
  });