// template strings
const value = 'Nathan'
console.log(`Bem vindo, ${value}`);

const n1 = 1;
const n2 = 2;
console.log(`${n1} + ${n2} = ${n1+n2}`);


console.log(`
exibindo
uma
palavra
`);

// Mercadinho do JavaScript

const nome = 'nome'
const idade = 20
const endereco = 'rua dos paes'

const div = 
`<div>
  <p><b>Nome: </b>${nome}</p>
  <p><b>Idade: </b>${idade}</p>
  <p><b>Endereço: </b>${endereco}</p>
</div>`;

console.log(div)

const nome = 'Nathan';
const anos = 20;

function marcacao(strings, ...valores) {
  console.log(strings[0])
  console.log(valores[0])
  console.log(strings[1])
  console.log(valores[1])
  console.log(strings[2])

  return 'oi';
}

var msg = marcacao`Meu nome é ${nome} e tenho ${anos} anos`
console.log(msg)