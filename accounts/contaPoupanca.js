const { Conta } = require("./conta"); // Importa a classe Conta

class ContaPoupanca extends Conta { // Classe ContaPoupanca herdada da classe Conta
  static taxaRendimento = 0.005; // Taxa de rendimento ex: 0,50%

  constructor(titular) {
    super(titular); // Chama o construtor da classe Conta
  }

  aplicarRendimento() {
    const rendimentoParaAplicar = this.saldo * ContaPoupanca.taxaRendimento; // Calcula o valor do rendimento

    if (this.saldo > 0) {
      this.saldo += rendimentoParaAplicar;
    } // Verifica se o saldo é positivo e adiciona o rendimento
  }
}

module.exports = { ContaPoupanca }; // Exporta a classe ContaPoupanca
