// Arguments

function somaTudo() {
  var soma = 0;
  for(var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  console.log(soma)
}

somaTudo(1) // 1
somaTudo(1, 2) // 3
somaTudo(1, 2, 3) // 6

/***********************************/

// Rest
function somaTudo2(...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor;
  }, 0)
}

console.log(somaTudo1(1)) // 1
console.log(somaTudo1(1, 2)) // 3
console.log(somaTudo1(1, 2, 3)) // 6


function multiplicaPorESoma(mult, ...valores) {
  return valores.reduce((soma, valor) => {
    return soma + (valor * mult);
  }, 0)
}

console.log(multiplicaPorESoma(2,1,2)) // 6
console.log(multiplicaPorESoma(2,6,7)) // 26

/***********************************/
// Spread
var args = [1,2,3]
console.log(...args)

const listM = ['leite', 'ovos', 'papel'];
const listN = ['arroz', 'feijão', 'suco'];
const listE = ['papel a4', 'caneta', 'clipe de papel']
// ES5
/*const listC = listM.concat(listN, listE)*/
// ES6
const listC = [...listM, ...listN, ...listE];

console.log(listC)
/***********************************/

function contVogais(...palavras) {
  let cont = 0;

  for(let pl of palavras) {
    let pLowCase = pl.toLowerCase();
    const letras = [...pLowCase];
    for(let lt of letras) {
      if("aeiou".indexOf(lt) !== -1) {
        cont++;
      }
    }
  }

  console.log(cont)
}

contVogais('es6') // 1
contVogais('java', 'javascript', 'delphi') // 7
contVogais('NãO ConSideRa AcentUADoS') // 10