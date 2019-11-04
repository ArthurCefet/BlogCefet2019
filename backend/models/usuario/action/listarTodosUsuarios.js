const Usuario = require('../../bd/table/Usuario')
//vamos pegar todos os usuarios e listar eles em um Objeto formato JSON
 const ListarTodosUsuarios= Usuario.findAll().then((users) => {
    console.log("Todos os Usuarios : ", JSON.stringify(users,null,4))
});

module.exports = ListarTodosUsuarios
