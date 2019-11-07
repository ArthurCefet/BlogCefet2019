//Importação do Sequelize
    //Criamos a variavel como const por uma medida de segurança para evitar que alguém ou algo mude o valor da variável
const Sequelize = require("sequelize")

//Criação da conexão com o bd usando o SEQUELIZE
    //como o Sequelize não é especifico de um banco de dados, o campo "Dialect" especifica qual bd será utilizado
const conexao = new Sequelize('crudusuario','root','', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

//Avalia se a conexao com o banco de dados foi realizada
conexao.authenticate().then(()=>{
    console.log("Conexao Com o Banco de Dados Realizada!")
}).catch((e)=>{
    console.log("Falha na Conexao com o Banco de Dados. ERROR :"+ e)
})


//agora que a conexao com o bd foi realizada, ela será exportada para outras áreas do sistema

module.exports = {
    Sequelize : Sequelize,
    conexao : conexao
  }
  
