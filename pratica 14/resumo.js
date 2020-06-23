/*
Resumo - Funções Geradoras
Funções geradoras são funções no JavaScript em que podemos interromper e retornar sua execução várias vezes. Em termos práticos, isso significa que a execução do método é realizada até um ponto e é interrompida até que invocada novamente. Quando invocada, continua sua execução a partir do ponto em que parou. 

Para entendermos melhor o que isso quer dizer, tome como exemplo uma possível implementação para o nosso cenário do ônibus. Usaremos uma função geradora chamada percorrerLinha477 que representa a trajetória do ônibus do terminal de partida até o fim de sua linha.
*/

function* percorrerLinha477() {
  console.log('Passei pela rua 1');
  yield 'Fim da linha';
}

/*
Repare atentamente na função geradora que acabamos de criar. Note que há duas coisas que nunca vimos antes: a palavra reservada function acompanhada de um * (asterisco), e a palavra reservada yield. O asterisco é usado para rotular uma função como geradora. Isso indica ao interpretador JavaScript que essa função pode ter sua execução interrompida nos pontos definidos com a palavra yield.

Quando invocamos uma função geradora, seu corpo não é executado imediatamente. Em vez disso, um objeto iterável é retornado. Esse objeto possui uma função muito útil chamada next. Ao utilizar este método next dele, o corpo da função geradora é executado até a primeira expressão yield, que define o valor que será devolvido no retorno da função.
*/

const linha = percorrerLinha477(); // {}
const parada = linha.next(); // Passei pela rua 1
console.log(parada); // { value: 'Fim da linha', done: false }

/*
Assim como uma linha de ônibus pode ter várias paradas, uma função geradora também pode. Para isso, basta declarar vários pontos de parada dentro da função com o yield. A cada invocação do next, o código é executado entre os dois pontos de parada. 
*/
function* percorrerLinha477() {
  console.log('Passei pela rua 1');
  yield 'Parada 1';
console.log('Passei pela rua 2');
  yield 'Parada 2';
  console.log('Passei pela rua 3');
  yield 'Parada 3';
  console.log('Passei pela rua 4');
  yield 'Fim da linha';
}

const linha = percorrerLinha477();
let next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);
next = linha.next(); console.log(next);

/*
Iteradores

Podemos utilizar o for...of para iterar a nossa função geradora:
*/

const linha = percorrerLinha477();
for(let parada of linha) {
  console.log(parada);
}

/*
Isso porque essa estrutura foi criada de modo a interpretar funções geradoras.

Símbolos

Para realmente entender como a estrutura `for...of` consegue interpretar as funções geradoras e, a partir delas, permitir iterar qualquer tipo de estrutura de dados, é preciso entender o conceito do Symbol e do Symbol.iterator, outra novidade do ES6. O símbolo representa um tipo único e imutável de dado. No ES6, o Symbol.iterator especifica o iterador padrão de um objeto. Quando usamos a estrutura for...of para iterar um objeto, o método definido por este símbolo é chamado e o iterável retornado é usado para obter os valores a serem iterados. Isso significa que todos os tipos de objetos iteráveis por padrão no JavaScript possuem este método definido.

Podemos definir uma função geradora no Symbol.Iterator para "explicar" como uma estrutura de dados deve ser percorrida. Como neste exemplo, onde temos um objeto chamado equipe e queremos iterar somente o nome dos integrantes dela, que estão nas propriedades senior, pleno e junior.
*/

const equipe = {
  quantidade: 3,
  maturidade: 'alta',
  senior: 'Luís',
  pleno: 'Márcia',
  junior: 'Christian',
  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

/*
Delegação

Por fim, também podemos combinar duas funções geradoras através da delegação de geradores. Para isso, usamos a palavra reservada yield acompanhada de um * (asterisco). Ele funciona como um link, uma porta, entre as duas funções geradoras. Como neste exemplo:
*/

const equipe = {
  timeDesenvolvimento,
  timeNegocios,
  [Symbol.iterator]: function* () {
    yield* timeDesenvolvimento;
    yield* timeNegocios
  }
};