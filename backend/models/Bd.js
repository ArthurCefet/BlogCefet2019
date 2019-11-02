//Importar o Sequelize
    //A gente cria a variavel como const por uma medida de segurança para evitar que alguem ou algo mude o valor da variavel
const Sequelize = require("sequelize")

//Vamos criar a conexão com o bd
    //como o Sequelize não é especifico de 1 banco de dados o campo "Dialect" especifica qual bd vai ser utilizado
const conexao = new Sequelize('nome_do_bd','user','password', {
    host: 'localhost',
    dialect: 'mysql'
})
