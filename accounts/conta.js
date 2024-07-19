const contas = []; // Array para armazenar as contas

class Conta { // Classe Conta
  constructor(titular, saldo = 0) {
    this.titular = titular; // Nome do cliente
    this.saldo = saldo; // Saldo inicial
    contas.push(this); // Adiciona a conta criada ao array de contas
  } // Cria a conta com base no tipo escolhido

  depositar(valor) { // Função de depósito
    if (valor > 0) { // Verifica se o valor informado é positivo
      this.saldo += valor; // Adiciona o valor informado ao saldo
      console.log(`Depósito de R$${valor} efetuado com sucesso!`); // Mensagem de depósito bem-sucedido
    } else {
      console.log(
        `Depósito de R$${valor} negado. O valor informado precisa ser positivo!`
      );
    } // Verifica se o valor informado é negativo
  }

  sacar(valor) { // Função de saque
    if (valor > 0 && this.saldo >= valor) { // Verifica se o valor informado é positivo e se o saldo é suficiente
      this.saldo -= valor; // Remove o valor informado do saldo
      console.log(`Saque de R$${valor} efetuado com sucesso!`); // Mensagem de saque bem-sucedido
    } else {
      console.log(
        `Saque de R$${valor} negado. O valor informado precisa ser positivo ou ter saldo suficiente!`
      ); // Verifica se o valor informado é negativo ou se o saldo não é suficiente
    } 
  }
}

module.exports = { Conta, contas }; // Exporta as classes Conta e contas
