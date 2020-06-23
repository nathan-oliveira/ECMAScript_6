/*
Resumo - const e let
Com a chegada do ES6, o modo de trabalhar com variáveis mudou. O JavaScript continua sem tipo como era antes, mas até então, usávamos somente o var para declarar as nossas variáveis, independente do seu tipo e contexto. Esta regra mudou: agora temos duas novas palavras reservadas que o substituem: const e let.

const

Usaremos o const nas variáveis que não esperamos que mudem de valor com o decorrer do tempo/execução do programa dentro de um escopo. Se tentarmos burlar isso atribuindo um outro valor para a variável, levamos um erro, como pode ser visto no exemplo a seguir:
*/

const dataNascimento = '21/07/1992';
dataNascimento = '25/08/1996'; // tentando atribuir novo valor

// TypeError: Assignment to constant variable.

/*
O erro indica que estamos tentando atribuir um valor novo a uma constante. Todavia, é necessário ter em mente que um const não se trata de uma variável constante, mas uma referência constante. Em termos práticos, isso significa que o valor não é imutável, é possível adicionar e remover propriedades desta variável. Como no próximo exemplo, no qual declaramos um objeto pessoa com uma propriedade nome e adicionamos uma outra propriedade idade a ela:
*/

const pessoa = {nome: 'joão'};
pessoa.idade = 12;
console.log(pessoa); // {"nome":"joão", "idade": 12}

/*
A referência ao objeto continua a mesma, por isso não recebemos nenhum erro.

let

Podemos considerar o let como o verdadeiro substituto do var. Idealmente ele deve ser usado para declarar variáveis que esperamos que mudem com o valor e com o tempo/execução do programa. Entretanto, ao contrário do que acontecia com o var, se uma mesma variável, dentro de um mesmo escopo, é declarada duas vezes, tomamos erro de sintaxe. Isso acontece tanto para o let quanto para o const.

A sua principal diferença em relação ao var, é que o var tem escopo de função, enquanto os novos tipos tem escopo de bloco.

TDZ (Temporal Dead Zone)

No ES6, o hoisting do let e const são diferentes de variáveis e funções. Quando uma variável é declarada usando eles, ela possui o que é chamada de Temporal Dead Zone (TDZ), nome que descreve o comportamento de que, no seu escopo, ela é inacessível até que a execução alcance sua declaração. Este comportamento é visível no trecho de código a seguir, em que:

Criamos uma variável valor fora do escopo de bloco do if;
Tentamos acessar a variável valor;
Definimos a variável valor;
Atribuímos o valor 1 à variável valor;
Acessamos a variável valor;
Acessamos a variável fora do escopo de bloco do if.
*/

let valor = 0;
if (true) {
  // novo escopo, o TDZ do 'valor' começa
  // Ao tentar acessar a variável, tomamos ReferenceError,
  // pois neste momento ela é uma variável
  // que não foi inicializada
  console.log(valor); // ReferenceError
  let valor; // TDZ termina e 'valor' é definida com 'undefined'
  console.log(valor); // undefined
  valor = 1;
  console.log(valor); // 1
}
console.log(valor); // 0

/*
Este comportamento evita que tenhamos resultados estranhos com os valores das variáveis, que era uma das grandes dores de cabeça ao usar JavaScript.*/