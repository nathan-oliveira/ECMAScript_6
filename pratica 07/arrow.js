/***
function desligar1() {
  // corpo da função
}

var desligar2 = function() {
  // corpo da função
}

var desligar3 = new Function("corpo da função");
***/

// Arrow Function
const nome = (nome) => `Nome: ${nome}`
console.log(nome('Nathan'))

// ThisBinding
// this

function imprimir() {
  console.log(this)
}
imprimir();


const objeto = {
  meuContexto: function() {
    console.log(this)
  }
}
objeto.meuContexto();
/*********************************/

const equipe = {
  nome: 'javascript',
  membros: ['React', 'Angular', 'Vue'],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} faz parte da equipe ${this.nome}`)
    })
  }
}

equipe.membrosDaEquipe();