const Usuario = require('../../bd/table/Usuario')

    export default function ListarUmUsuarioByID(user_id){ 
        Usuario.findAll({
            where: {
                id: user_id
                }
            }).then((user) => {
                console.log('Usuarios : ', JSON.stringify(user,null,2))
            })
    }

