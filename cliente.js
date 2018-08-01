angular.module('todoApp')
    .controller('ClienteController', function () {
        let cliente = this;

        cliente.clientes = [];
        cliente.nome = "Joel";
        cliente.idade = 10;

        cliente.adicionarCliente = function () {
            cliente.clientes.push({ nome: cliente.nome, idade: cliente.idade });
            cliente.nome = "";
            cliente.idade = 0;
        }

        cliente.limpar = function () {
            cliente.clientes = [];
        }

        cliente.excluir = function (nome) {
            let clientesAntes = cliente.clientes;
            cliente.clientes = clientesAntes
                .filter(function (cliente) {
                    return cliente.nome !== nome;
                });
        }
    });