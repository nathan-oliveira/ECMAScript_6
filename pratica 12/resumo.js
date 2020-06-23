/*
Resumo - Classes
Uma das maiores dificuldades ao estudar JavaScript é entender a maneira como herança funciona, pois ela não funciona da maneira como aprendemos em Orientação a Objetos (OO), ou em linguagens como o Java e C#. O JavaScript possui herança por prototipagem (Prototypal Inheritance).

A ideia por trás da funcionalidade de classes no ES6 é que possamos criar uma hierarquia de objetos que, por debaixo dos panos, ainda funciona em cima da herança por prototipagem. Classes formam um novo paradigma que atende como uma camada de abstração em cima deste tipo de prototipagem, tornando o código e a aprendizagem mais fáceis e próximos ao que já conhecemos como Orientação a Objetos.

Para criar uma nova classe, basta utilizar a palavra reservada class:
*/

class Carro {
  // implementação
}

/*
Para inserir propriedades dentro da classe, temos que ter uma função construtora. Ela é criada através da palavra constructor:
*/

class Carro {
  constructor(modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }
}

/*
Para inserir métodos, basta declará-los como fizemos na aula de Melhorias para Objetos Literais:
*/

class Carro {
  constructor(modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }
  andar() {
    console.log("vrum vrum");
  }
}

/*
Extendendo uma classe

Para extender uma classe, usamos a palavra reservada extends na declaração da classe:
*/

class Sonix extends Carro {
  // implementação do sonix
}

/*
Mas isso ainda não é o suficiente. Para que as propriedades da classe Carro sejam compartilhadas com as classes filhas, é necessário que elas invoquem o seu construtor nos seus próprios construtores, utilizando a palavra reservada super.
*/
class Sonix extends Carro {
  constructor(modelo, chassi, qtdPortas) {
    super(modelo, chassi, qtdPortas);
  }
  abrirTetoSolar() {
    console.log('abrindo teto solar');
  }
}
/*
Agora sim, a herança está completa!
*/
const sonix = new Sonix('Sonix', '9120219', 4);
sonata.abrirTetoSolar(); // abrindo teto solar
sonata.andar(); // vrum vrum
console.log(sonata.modelo); // Sonix
/*
Hoisting em classes

No ES5, quando criamos objetos por meio de funções, temos o comportamento de hoisting. Isto é, dentro de um escopo, as funções que são declaradas são imediatamente disponíveis para uso — independente de onde as declarações acontecem. 

Em outras palavras, isso significa que podemos chamar uma função que é declarada só depois no código. Veja o exemplo a seguir, no qual conseguimos instanciar Carro antes mesmo de declará-lo:
*/
const carro = new Carro('sonix');
console.log(carro.modelo);
function Carro(modelo) {
  this.modelo = modelo;
}

/*
Porém, declarações de classes não possuem este comportamento. A classe só existe quando a execução do código chega ao ponto onde a classe é avaliada. Se tentarmos acessar antes, tomaremos um ReferenceError.
*/

const carro = new Carro('sonix'); // ReferenceError
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

/*
Métodos estáticos

A nova sintaxe de classes do ES6 nos permite declarar métodos estáticos na definição de nossas classes. Este tipo de método pode ser invocado sem que seja instanciado um novo objeto da classe. Para definir este tipo de método, usamos a palavra reservada static.
*/

class Casa {
  static abrirPorta(){
    console.log('abrindo porta');
  }
}

Casa.abrirPorta(); // abrindo porta
