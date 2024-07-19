// Importa as classes Conta, ContaCorrente, e ContaPoupanca dos respectivos arquivos
const { Conta } = require("./accounts/conta");
const { ContaCorrente } = require("./accounts/contaCorrente");
const { ContaPoupanca } = require("./accounts/contaPoupanca");

// Importa as funções encontrarConta e aplicarJurosAutomaticamente do arquivo acc_utils
const {
  encontrarConta,
  aplicarJurosAutomaticamente,
} = require("./accounts/acc_utils");

// Cria uma interface de leitura para interagir com o usuário via console usando o readline
const readline = require("readline").createInterface({
  input: process.stdin, // Recebe a entrada do usuário
  output: process.stdout, // Envia a saida do usuário
});

// Função principal do menu do sistema bancário
function menu() {
  console.clear(); // Limpa o console
  console.log("\nBem vindo ao banco iTalents!");
  console.log(
    "\nPor favor, escolha uma opção do Menu para iniciar o atendimento!"
  );
  console.log("\n1. Cadastrar conta");
  console.log("2. Depositar em uma conta");
  console.log("3. Sacar de uma conta");
  console.log("4. Ver saldo de uma conta");
  console.log("5. Sair do sistema");

  // Solicita ao usuário para escolher uma opção do menu
  readline.question("\nInsira uma opção: ", (opcao) => {
    console.clear(); // Limpa o console
    opcoes(opcao); // Chama a função opcoes com a opção escolhida
  });
}

// Função que lida com as opções do menu
function opcoes(opcao) {
  switch (
    opcao // Executa a opção escolhida
  ) {
    case "1":
      // Cadastrar nova conta
      // Solicita ao usuário o nome e o tipo da conta
      // Cria a conta com base no tipo escolhido
      // Adiciona a conta criada na lista de contas
      // Chama a função menu para mostrar o menu novamente
      readline.question(
        "Insira o nome do titular para abrir uma conta no banco: ",
        (titular) => {
          console.clear();
          readline.question(
            `Que tipo de conta deseja criar, ${titular.toUpperCase()} ? [1 - Corrente, 2 - Poupança, 3 - Genérica]: `,
            (tipo) => {
              console.clear();

              let conta; // Variável para armazenar a conta criada

              // Cria a conta com base no tipo escolhido
              if (parseInt(tipo) === 1) {
                conta = new ContaCorrente(titular); // Cria uma conta corrente instanciando o construtor da classe ContaCorrente
              } else if (parseInt(tipo) === 2) {
                conta = new ContaPoupanca(titular); // Cria uma conta poupança instanciando o construtor da classe ContaPoupanca
              } else if (parseInt(tipo) === 3) {
                conta = new Conta(titular); // Cria uma conta instanciando o construtor da classe Conta
              } else {
                console.log("Tipo de conta inválida! Tente novamente...");
              }

              // Informa ao usuário que a conta foi criada com sucesso se a conta foi criada corretamente
              if (conta) {
                console.log(
                  `Conta em nome de ${conta.titular.toUpperCase()} criada com sucesso!`
                );
              }

              // Volta ao menu após 4 segundos usando o setTimeout
              setTimeout(() => menu(), 4000);
            }
          );
        }
      );
      break;

    case "2":
      // Depositar em uma conta
      // Solicita ao usuário o nome e o tipo da conta
      // Encontra a conta com base no nome e tipo
      // Deposita o valor na conta encontrada
      // Chama a função menu para mostrar o menu novamente
      readline.question(
        "Insira o nome da conta para depósito, por favor: ",
        (titular) => {
          console.clear();
          readline.question(
            `Que tipo de conta deseja depositar, ${titular.toUpperCase()} ? [1 - Corrente, 2 - Poupança, 3 - Genérica]: `,
            (tipo) => {
              console.clear();
              readline.question(
                "Insira o valor que deseja depositar: ",
                (valor) => {
                  console.clear();

                  // Encontra a conta com base no titular e tipo
                  let conta = encontrarConta(titular, parseInt(tipo)); // Encontra a conta com base no titular e tipo

                  // Verifica se a conta foi encontrada
                  if (!conta) {
                    console.log("Conta não encontrada! Tente novamente...");
                  } else {
                    conta.depositar(parseInt(valor)); // Deposita o valor na conta encontrada
                  }

                  // Volta ao menu após 4 segundos
                  setTimeout(() => menu(), 4000);
                }
              );
            }
          );
        }
      );
      break;

    case "3":
      // Sacar de uma conta
      // Solicita ao usuário o nome e o tipo da conta
      // Encontra a conta com base no nome e tipo
      // Realiza o saque na conta encontrada
      // Chama a função menu para mostrar o menu novamente
      readline.question(
        "Insira o nome da conta para saque, por favor: ",
        (titular) => {
          console.clear();
          readline.question(
            `Que tipo de conta deseja sacar, ${titular.toUpperCase()} ? [1 - Corrente, 2 - Poupança, 3 - Genérica]: `,
            (tipo) => {
              console.clear();
              readline.question("Insira o valor deseja sacar: ", (valor) => {
                console.clear();

                // Encontra a conta com base no titular e tipo
                let conta = encontrarConta(titular, parseInt(tipo));

                // Verifica se a conta foi encontrada
                if (!conta) {
                  console.log("Conta não encontrada! Tente novamente...");
                } else {
                  conta.sacar(parseInt(valor)); // Realiza o saque da conta encontrada
                }
                // Volta ao menu após 4 segundos
                setTimeout(() => menu(), 4000);
              });
            }
          );
        }
      );
      break;

    case "4":
      // Ver saldo de uma conta
      // Solicita ao usuário o nome e o tipo da conta
      // Encontra a conta com base no nome e tipo
      // Imprime o saldo da conta encontrada
      // Chama a função menu para mostrar o menu novamente
      readline.question(
        "Qual é o nome da conta que deseja consultar? ",
        (titular) => {
          console.clear();
          readline.question(
            `Que tipo de conta deseja acessar ${titular.toUpperCase()} ? [1 - Corrente, 2 - Poupança, 3 - Genérica]: `,
            (tipo) => {
              console.clear();

              // Encontra a conta com base no titular e tipo
              let conta = encontrarConta(titular, parseInt(tipo));

              // Verifica se a conta foi encontrada
              if (!conta) {
                console.log("Conta não encontrada! Tente novamente...");
              } else {
                console.log(
                  `Conta em nome de ${conta.titular.toUpperCase()} possui saldo de R$${conta.saldo.toFixed(
                    2
                  )} reais.`
                ); // Imprime o saldo da conta encontrada no console
              }
              // Volta ao menu após 4 segundos
              setTimeout(() => menu(), 4000);
            }
          );
        }
      );
      break;

    case "5":
      // Sair do sistema
      console.log("Obrigado por utilizar o sistema do banco iTalents!");
      readline.close(); // Fecha a interface de leitura
      setTimeout(() => process.exit(), 3000); // Sai do processo após 3 segundos usando o método exit do Node.js
      break;

    default:
      // Opção inválida
      console.log("Opção inválida!");
      setTimeout(() => menu(), 2000); // Volta ao menu após 2 segundos
      break;
  }
}

// Inicia o menu do sistema bancário
menu();

// Aplica juros automaticamente às contas poupança e corrente
aplicarJurosAutomaticamente();

// A ideia de usar readline é novidade do Node.js para a minha pessoa, pois nunca havia trabalhado com isso antes.
// Consegui entender o que ela propõe (com esforço) e o que ela me permitiu fazer.
// Você pode encontrar mais detalhes em: https://nodejs.org/api/readline.html

// Sobre aplicação de juros e rendimentos, optei por usar de maneira automatizada para simular o que acontece dentro
// de um ambiente bancário, onde o rendimento incide nas contas 1x ao dia, mas para efeitos de exemplo, deixei apenas 10s.
