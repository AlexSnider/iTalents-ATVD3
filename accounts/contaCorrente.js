const { Conta } = require("./conta"); // Importa a classe Conta

class ContaCorrente extends Conta { // Classe ContaCorrente herdada da classe Conta
  static taxaJuros = 0.01; // Taxa de juros da conta corrente ex: 1%

  constructor(titular) {
    super(titular); // Chama o construtor da classe Conta
  }

  aplicarJuros() { // Função de aplicação de juros
    const jurosParaAplicar = this.saldo * ContaCorrente.taxaJuros; // Calcula o valor dos juros

    if (this.saldo > 0) {
      this.saldo += jurosParaAplicar;
    } // Verifica se o saldo é positivo e adiciona os juros
  }
}

module.exports = { ContaCorrente }; // Exporta a classe ContaCorrente
