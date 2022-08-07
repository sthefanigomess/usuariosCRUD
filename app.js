//Importar o express
const express = require('express')
const functions = require('./functions')

//Criar uma aplicacao/servidor
const app = express()

//Informar para o servidor o endereco e a funcao a ser executada quando esse endereco receber uma requisicao

//Rota GET para '/home' vai executar a funcao FFFFFF
app.get(
    '/endereco',
    (req, res) => {
        res.send("Qualquer msg")
    }
)

//Rota que lista os usuarios
// GET '/usuarios''
app.get(
    '/usuarios',
    (req, res) => {
        let usuarios = functions.listarUsuarios()
        res.send(usuarios)
    }
)

// Rota para criar usuario
//POST '/usuarios'
app.post(
    '/usuarios',
    (req,res) => {
        functions.criarUsuario('Fulano')
        res.send('Usuario criado com sucesso')
    }
)

/**
metodos de enviar/receber requisitos

app.post    <- enviar informacoes
app.get     <- pedir informacoes para o servidor
app.put     <- alterar alguma informacao do servidor
app.patch   <- alter uma parte do servidor
app.delete  <- apagar algo do servidor

C : CREAT -> CRIAR
R : READ -> LER
U : UPDATE -> ALTERAR/ATUALIZAR
D : DELETE -> APAGAR

*/ 


//Fazer o servidor ficar de prontidao aguardando uma requisicao
app.listen(3000, ()=> {console.log('Servidor rodando na porta 3000')})

