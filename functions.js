const usuarios = require('./database/usuarios.json')
const fs = require('fs')
const path = require('path')

module.exports = {
    
    criarUsuario: (nome) => {
        //inferir o id deste novo usuario
        let novoId = usuarios[usuarios.length - 1].id + 1

        //criar um objeto literal com os dados do usuario
        let novoUsuario = {
            id: novoId,
            nome: nome
        }

        //adicionar o usuario (objeto literal) ao final do array
        usuarios.push(novoUsuario)

        //salvar esse array no arquivo ./database/usuarios.json
        fs.writeFileSync(path.resolve('./database/usuarios.json'),JSON.stringify(usuarios))

    },
    removerUsuario: () => {},
    substituirUsuario: () => {},
    buscarUsuario: () => {},
    listarUsuarios: () => {
        return usuarios
    }

}