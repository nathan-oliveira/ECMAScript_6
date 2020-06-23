var chapeuSeletor = (bruxo) => {
  var casas = ['Grifinófia', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
  var casa = casas[Math.floor(Math.random() * casas.length)]

  console.log(`Bruxo: ${bruxo} | Casa: ${casa}`);
}

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

// var iteradorBruxos = bruxos[Symbol.iterator]();
// console.log(iteradorBruxos.next());
// console.log(iteradorBruxos.next());
// console.log(iteradorBruxos.next());

var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();

do {
  var bruxo = proximo.value;
  chapeuSeletor(bruxo);
  proximo = iterador.next();
} while (!proximo.done);