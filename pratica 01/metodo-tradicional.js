/************************************/
var names = ['diego', 'marcelo', 'josé'];
// for(var i =0; i < names.length; i++) {
//   console.log(names[i]);
// }

// forEach
names.forEach((name) => {
  // names.push('cultura');
  console.log(name);
})

/************************************/
var numeros1 = [1, 2, 3];

// MAP //
var dobro = numeros1.map((numero) => {
  return numero * 2
})

/************************************/
var alunos1 = [
  {name: 'joão', idade: 15},
  {name: 'josé', idade: 18},
  {name: 'maria', idade: 20},
  {name: 'tulio', idade: 17}
];

/*
var alunosDeMaior = [];
for(var i = 0; i < alunos1.length; i++) {
  var aluno = alunos1[i];
  if(aluno.idade >= 18) {
    alunosDeMaior.push(aluno)
  }
}
*/

// Filter //
var alunosDeMaior = alunos1.filter((aluno) => {
  return aluno.idade >= 18;
})

/************************************/
/*
var alunoProcurado;

for(var i = 0; i < alunos.length; i++) {
  var aluno = alunos[i].name;
  if(aluno.name === 'josé') {
    alunoProcurado = aluno;
    break;
  }
}
*/

// Find //
var alunoProcurado = alunos1.find((aluno) => {
  return aluno.name === 'josé';
})

/************************************/
var jogos = [
  {name: 'Uncharted 4: A Thiefs End', categoria: 'ação'},
  {name: 'Gran Turismo 6', categoria: 'plataforma'},
  {name: 'Need for Speed Most Wanted', categoria: 'corrida'},
  {name: 'Mario Kart 8', categoria: 'shooter'},
  {name: 'Forza Motorsport', categoria: 'corrida'}
];
/*
var todosJogosCorrida = true;
for (var i =0; i < jogos.length; i++) {
  var jogo = jogos[i];
  if(jogo.categoria !== 'corrida') {
    todosJogosCorrida = false;
    break;
  }
}
*/

// Every //
var todosJogosCorrida1 = jogos.every((jogo) => {
  return jogo.categoria === 'corrida' // retornou true ou false
})

/************************************/
/*
var todosJogosCorrida2 = false;
for (var i =0; i < jogos.length; i++) {
  var jogo = jogos[i];
  if(jogo.categoria === 'corrida') {
    todosJogosCorrida = true;
    break;
  }
}
*/

// Some
var todosJogosCorrida2 = jogos.some((jogo) => {
  return jogo.categoria === 'corrida'
})

/************************************/
var numeros2 = [1, 2, 3, 4, 5];
/*
var soma = 0;
for (var i = 0; i < numeros2.length; i++) {
  soma += numeros2[i];
}
*/

// Reduce 1
var total = numeros2.reduce((somaAux, numero) => {
  return somaAux + numero;
}, 0)


var alunos2 = [
  {name: 'joão', idade: 15},
  {name: 'josé', idade: 18},
  {name: 'marcos', idade: 17}
];

// Reduce 2
var nomes = alunos2.reduce((arrayNomes, aluno) => {
  arrayNomes.push(aluno.name)
  return arrayNomes;
},[]);
