//Importar o Sequelize
    //A gente cria a variavel como const por uma medida de segurança para evitar que alguem ou algo mude o valor da variavel
const Sequelize = require("sequelize")

//Vamos criar a conexão com o bd usando o SEQUELIZE
    //como o Sequelize não é especifico de 1 banco de dados o campo "Dialect" especifica qual bd vai ser utilizado
const conexao = new Sequelize('crudusuario','root','', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

//Avalia se a conexao com o banco de dados foi feita
conexao.authenticate().then(()=>{
    console.log("Conexao Com o Banco de Dados Realizada!")
}).catch((e)=>{
    console.log("Falha na Conexao com o Banco de Dados. ERROR :"+ e)
})


//agora que a conexao com o bd foi realizada, ela vai ser exportada para outras areas do sistema

module.exports = {
    Sequelize : Sequelize,
    conexao : conexao
  }
  