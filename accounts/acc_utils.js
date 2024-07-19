// Importa as classes Conta, ContaCorrente, e ContaPoupanca dos respectivos arquivos

const { Conta, contas } = require("./conta");
const { ContaCorrente } = require("./contaCorrente");
const { ContaPoupanca } = require("./contaPoupanca");

// Função que lida com as opções do menu
// Requer o tipo de conta e o nome do cliente
// Retorna a conta correspondente encontrada no array de contas da classe Conta
function encontrarConta(titular, tipo) {
  return contas.find(
    // Método find para encontrar a conta percorrendo o array de contas e retornando a conta correspondente caso true
    (conta) =>
      conta.titular === titular &&
      ((tipo === 1 && conta instanceof ContaCorrente) ||
        (tipo === 2 && conta instanceof ContaPoupanca) ||
        (tipo === 3 && conta instanceof Conta))
  );
}

// Função que aplica juros automaticamente às contas poupança e corrente
// Repete a cada 10 segundos
// Requer o tipo de conta
// Chama a função aplicarJuros() e aplicarRendimento()
// Usa setInterval para executar a função a cada 10 segundos
function aplicarJurosAutomaticamente() {
  setInterval(() => {
    contas.forEach((conta) => {
      if (conta instanceof ContaCorrente) {
        conta.aplicarJuros();
      } else if (conta instanceof ContaPoupanca) {
        conta.aplicarRendimento();
      }
    });
  }, 10000);
}

module.exports = { encontrarConta, aplicarJurosAutomaticamente }; // exporta as funções
