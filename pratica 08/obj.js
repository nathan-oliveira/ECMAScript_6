// funções construtoras e objetos
/*
function Livro(titulo) {
  this.titulo = titulo;
}

var livro = new Livro('Harray Potter');
console.log(livro)


// objeto literal
var livro = {
  titulo: 'Anjos'
}
livro.autor = 'Dan';
livro['monstrarLivro'] = function() {
  console.log(this.titulo);
}
console.log(livro);
// var livro2 = livro;
// livro2.titulo = 'O Código da Vinci'

// console.log(livro)
// console.log(livro2)
*/

let nome = 'Nathan';
let sobrenome = 'Oliveira';

const pessoa = {
  nome,
  sobrenome,
  seApresentar() {
    console.log(`Olá! Sou ${this.nome} ${this.sobrenome}`)
  }
}

console.log(pessoa)
pessoa.seApresentar()

/*
const nomeMetodo = 'invocar';
const objeto = {
  [nomeMetodo]() {
    console.log('executou o método')
  }
}

objeto.invocar();
*/

const nomeFuncao = 'mostrar';
const prop = 'Nome';

const obj = {
  Nome: 'Objeto',
  [`${nomeFuncao}${prop}`](){
    console.log(prop)
  }
}

obj.mostrarNome();