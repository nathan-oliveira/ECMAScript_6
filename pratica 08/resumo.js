/*
Resumo - Melhorias em Objetos Literais
Apesar de não possuir classes (até o ES6) e nem interfaces, o JavaScript é uma linguagem de programação orientada a objetos (baseada em prototipagem). Para o JavaScript, um objeto é uma coleção de propriedades e cada propriedade é uma associação entre chave/valor — como vimos na aula de Mapas. O valor pode ser primitivo, assim como uma função, que é então considerada um método do objeto. Além dos objetos que já são preestabelecidos no navegador, como o objeto Window, é possível definir nossos próprios objetos.

Existem duas maneiras de se criar objetos no JavaScript: por meio de funções construtoras, ou por objetos literais. Os construtores são funções que, quando invocadas com a palavra reservada new, criam uma nova instância de um objeto. A diferença crucial das funções construtoras em relação aos objetos literais é que estes são estáticos e únicos. Isso significa que mesmo que ele seja armazenado em diferentes variáveis, todas apontarão para a mesma referência. Repare:
*/
var livro = {
  titulo: 'Anjos e Demônios'
}
console.log(livro.titulo); // Anjos e Demônios

var outroLivro = livro;
livro.titulo = 'O Código da Vinci';

console.log(outroLivro.titulo); // O Código da Vinci
console.log(livro.titulo); // O Código da Vinci

/*
Com o ES6, ganhamos várias melhorias para nos ajudar a manipular objetos literais. Agora quando temos o valor de uma variável equivalente ao nome da propriedade do nosso objeto, podemos fazer a associação muito facilmente, como neste código:
*/
var nome = 'Maria';
var sobrenome = 'Madalena';

// ES5
var pessoa = {
  nome: nome,
  sobrenome: sobrenome
}

// ES6
const pessoa = {nome, sobrenome};

/*
O próprio interpretador já associa o nome da propriedade com a variável de mesmo nome dentro do seu escopo. O mesmo é válido para propriedades que são funções. No caso das funções, temos outra melhoria, sua declaração ficou muito mais simples:
*/

const nome = 'Maria';
const sobrenome = 'Madalena';
const pessoa = {
  nome,
  sobrenome,
  seApresentar(){
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
  }
};

pessoa.seApresentar(); // Olá! Sou a Maria Madalena

/*
Além de permitir a declaração de objetos literais com uma sintaxe abreviada, o ES6 também nos permite ter índices de propriedades computadas em uma definição de objeto literal. Isso significa que podemos passar expressões no qual o resultado será equivalente ao nome que será relacionado à chave.
*/