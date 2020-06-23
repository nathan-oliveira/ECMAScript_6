/*
  Resumo - Arrow Functions
Com o ES6, nós ganhamos mais uma maneira de declarar funções: através das Arrow Functions (em tradução livre, seria algo como "funções de seta"). Esta estrutura é uma notação simplificada criada para facilitar a implementação de funções por expressão no JavaScript. A definição de uma Arrow Function é bem simples e segue esta ordem:

Parâmetros dentro de parênteses (...);
Fat arrow (=>);
Corpo da função entre chaves ({...}).

Veja a sintaxe:
(param1, param2 …, param n) => {
  // corpo da função
}

Esta nova notação possui duas vantagens em relação a antiga maneira de declararmos expressões de função.

São menos verbosas: Arrow Functions nos permite escrever funções menos verbosas. Veja como podemos tornar o código mais enxuto:
*/

// ES5
var boasVindas = function(nome) {
  return "Seja bem-vindo, " + nome;
}

// ES6
const boasVindas = nome => `Seja bem-vindo, ${nome}`;
boasVindas("Luiz"); // Seja bem-vindo, Luiz

/*
O contexto de execução é diferente: Sempre que executamos uma função no JavaScript, ela é associada a um contexto de execução. Esse contexto possui uma propriedade denominada ThisBinding, que pode ser acessada a qualquer momento através da palavra reservada this. O valor do this, que chamamos de contexto da função, é constante e existe enquanto este contexto de execução existir. As Arrow Functions foram projetadas para conseguirmos capturar o this do seu contexto delimitador (chamamos isso de escopo léxico da função), como no exemplo a seguir:
*/

const equipe = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`);
    })
  }
}

/*
Ao executar o equipe.membrosDaEquipe novamente, continuamos tendo a saída esperada:
  Goku é da equipe Guerreiros Z
  Kuririn é da equipe Guerreiros Z
  Vegeta é da equipe Guerreiros Z

Como as Arrow Functions conseguem fazer a associação (bind) do this de forma automática, referenciar o this do contexto da execução delimitadora para o escopo da atual função deixou de ser um problema.
*/