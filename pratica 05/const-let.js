var arrayVar = [];
for(var i = 0; i < 5; i++) {
  arrayVar.push(function() {
    console.log(i);
  })
}
i = 10; // atribuindo um novo valor

var arrayLet = [];
for(let i = 0; i < 5; i++) {
  arrayLet.push(function() {
    console.log(i);
  })
}

arrayVar.forEach(function(funcao) {
  funcao(); // 5,5,5,5
})
console.log('-----------------------');
arrayLet.forEach(function(funcao) {
  funcao(); // 1,2,3,4
})

// const ->  não mudam de valor
const dataNascimento = '17/09/1999';
//dataNascimento = '00/09/1999'; // gerou um erro... pois não é permitido

const pessoa = {
  nome: 'joãozinho'
}
pessoa.idade = 32; // adiciona um atributo no objeto

const novaPessoa = {
  nome: 'mariazinha'
}
pessoa = novaPessoa;  // gerou um erro... pois não é permitido

// let
let resultado = 0;
resultado = 2+3;
resultado += 5;
console.log(resultado);

/* Temporal Dead Zone(TDZ) // hoisting
nome = 'nathan'
imprimir(nome);

function imprimir(nome) {
  console.log(nome)
}

var nome;
*/ 

let valor = 0;
if(true) {
  let valor;
  console.log(valor) // undefined
  valor = 1
  console.log(valor) // 1
}

console.log(valor) // 0