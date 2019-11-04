
//vamos importar em uma variavel, o bd.js criado
const bd= require('../Bd')


//Montando a tabela
const Usuario = bd.conexao.define('Usuario',{   
    NomeDeLogin: {
        type: bd.Sequelize.STRING,
        required : true
    },
    Email : {
        type: bd.Sequelize.STRING,
        required : true
    },
    Senha : {
        type: bd.Sequelize.STRING,
        required : true
    },
})

 //Usuario.sync({force : true})

module.exports = Usuario