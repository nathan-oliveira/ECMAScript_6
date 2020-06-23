// function* percorrerLinha477() { // * rótula uma função
//   console.log('passei pela rua 1')
//   yield 'Fim da Linha' // ponto de parada...
// }

// const linha = percorrerLinha477();
// // linha.next();
// const parada = linha.next();
// console.log(parada);

function* percorrerLinha477() {
  console.log('Passei pela rua 1');
  yield 'Parada 1'

  console.log('Passei pela rua 2');
  yield 'Parada 2'

  console.log('Passei pela rua 3');
  yield 'Parada 3'

  console.log('Passei pela rua 4');
  yield 'Fim da Linha'
}

const linha = percorrerLinha477();
for(let parada of linha) {
  console.log(parada)
}

/*****************************************************/
// Symbol.iterator

// const objeto = {
//   valor: 10,
//   [Symbol("simbolo")]: "oi, eu sou um símbolo"
// };

// console.log(objeto.valor);
// console.log(objeto.simbolo);

const primos = [2, 3, 5];
const iterator = primos[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*****************************************************/

const equipe1 = {
  quantidade: 3,
  maturidade: 'alta',
  senior: 'Luis',
  pleno: 'Márcia',
  junior: 'Christian',
  [Symbol.iterator]: function*() {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

for(let interador1 of equipe1) {
  console.log(interador1);
}


/*****************************************************/

const timeDev = {
  quantidade: 3,
  senior: 'Luis',
  pleno: 'Márcia',
  junior: 'Christian',
  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

const timeNegocios = {
  quantidade: 2,
  diretor: 'Marcelo',
  vice: 'Guilherme',
  [Symbol.iterator]: function* () {
    yield this.diretor;
    yield this.vice;
  }
}

const equipe = {
  timeDev,
  timeNegocios,
  [Symbol.iterator]: function* () {
    yield* timeDev;
    yield* timeNegocios;
  }
}

for(let integrante of equipe) {
  console.log(integrante);
}