function meuParamentos(x, y = '') {
  console.log(`${x} ${y}`)
}

meuParamentos('Nathan', 'Oliveira')
meuParamentos()
/*
function imprimirNomeCompleto(nome, sobrenome, nomeDoMeio) {
  if(nomeDoMeio === undefined) {
    console.log(`${nome} ${sobrenome}`)
  } else {
    console.log(`${nome} ${sobrenome} ${nomeDoMeio}`)
  }
}
*/

function imprimirNomeCompleto(nome, sobrenome, nomeDoMeio = '') {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimirNomeCompleto('Nathan', 'Oliveira', 'Mendonça')
imprimirNomeCompleto('Nathan', 'Oliveira')


function calculaPotencia(x = 2, y = x) {
  console.log(Math.pow(x,y))
}

calculaPotencia()
calculaPotencia(3)
calculaPotencia(2,3)

const v = 'valor 1';

function funcao(x = v) {
  const v = 'valor';
  console.log(x)
}

funcao()

// function exibeNome(nome, callback = z => {
//   console.log(z)
// }) {
//   callback(nome)
// }

// exibeNome('Muriel', nomeRecebido => {
//   console.log(nomeRecebido)
// })
function paramsValid(params) {
  throw new Error(`O parâmento ${params} é obrigatório`)
}

function inserirNaTela(objeto = paramsValid('objeto')) {

}


inserirNaTela();