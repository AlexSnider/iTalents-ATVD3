# iTalents - Desafio 3

## Sistema de Gerenciamento Bancário

Desafio do bootcamp back-end node.js promovido pela iTalents. O projeto refere-se à um programa para gerenciamento de contas bancárias, permitindo cadastrar contas, realizar depósitos, saques, consultar saldo e aplicar juros automaticamente nas contas poupança e corrente.

## Estrutura do Projeto

- `script.js`: Script JavaScript que contém a lógica do menu principal e as operações bancárias.
- `accounts/conta.js`: Módulo que define a classe `Conta`.
- `accounts/contaCorrente.js`: Módulo que define a classe `ContaCorrente`.
- `accounts/contaPoupanca.js`: Módulo que define a classe `ContaPoupanca`.
- `accounts/acc_utils.js`: Módulo com funções utilitárias para encontrar contas e aplicar juros automaticamente.

## Funcionalidades

### Menu Principal
- Exibir o menu principal com opções para:
  - Cadastrar conta
  - Depositar em uma conta
  - Sacar de uma conta
  - Ver saldo de uma conta
  - Sair do sistema

### Cadastrar Conta
- Solicita o nome do titular e o tipo de conta (Corrente, Poupança ou Genérica).
- Cria a conta correspondente e informar o usuário sobre a criação bem-sucedida.

### Depositar em uma Conta
- Solicitar o nome do titular, o tipo de conta e o valor do depósito.
- Encontra a conta correspondente e realizar o depósito.

### Sacar de uma Conta
- Solicitar o nome do titular, o tipo de conta e o valor do saque.
- Encontra a conta correspondente e realizar o saque.

### Ver Saldo de uma Conta
- Solicitar o nome do titular e o tipo de conta.
- Encontra a conta correspondente e exibe o saldo.

### Aplicar Juros Automaticamente
- Aplicar juros automaticamente às contas poupança ou corrente.

## Funções da Aplicação

- Utiliza a função `readline` para capturar as entradas do usuário via console.
- A função `encontrarConta` localiza uma conta com base no titular e no tipo de conta.
- A função `aplicarJurosAutomaticamente` aplica juros às contas poupança ou corrente periodicamente em intervalos de exemplo, 10 seg.

### Classes

#### Conta
- Classe base para contas bancárias.
- Propriedades: `titular`, `saldo`.
- Métodos: `depositar`, `sacar`.

#### ContaCorrente
- Subclasse de `Conta` para contas correntes.
- Métodos adicionais `aplicarJuros` para aplicar juros.

#### ContaPoupanca
- Subclasse de `Conta` para contas poupança.
- Métodos adicionais `aplicarRendimento` para aplicar rendimento.

### Funções Utilitárias

#### encontrarConta
- Localiza uma conta com base no nome do titular e no tipo de conta.

#### aplicarJurosAutomaticamente
- Aplica juros automaticamente às contas poupança ou corrente.

## Como Usar

### Executando com Node.js

1. **Instale o Node.js**:
   - [Baixe e instale o Node.js](https://nodejs.org/).

2. **Clone o repositório**:
   ```sh
   git clone https://github.com/AlexSnider/iTalents-ATVD3
   cd iTalents-ATVD3
   npm install
   node script.js || npm start

## Minhas impressões durante o desenvolvimento

Como parte da rota de aprendizado, esse projeto me forneceu um execente ambiente de desenvolvimento com POO. Pude enfrentar desafios dos mais diferentes a fim de produzir um sistema que atenda aos requisitos estipulados. Classes e Heranças de classe formam a base do projeto, direcionando o cliente exatamente para o contexto pedido. Agradeço pela oportunidade de mostrar minhas capacidades! #iTalents

## Licença
Esse projeto está sob lincença [MIT](https://github.com/AlexSnider/iTalents-ATVD3/blob/main/LICENSE).
