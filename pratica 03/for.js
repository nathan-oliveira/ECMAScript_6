// for..of
var numeros = [1,2,3,4,5];
for(var numero of numeros) {
  console.log(numero) // 1,2,3...
}

// for..in
var carro = {
  modelo: 'fiat',
  ano: 1995
}
for(var propriedade in carro) {
  var info = carro[propriedade];
  console.log(info) // fiat, 1995
}

// break e continue
for(var numero of numeros) {
  // if(numero > 3) break;
  // console.log(numero) // 1, 2, 3

  if(numero === 2) continue;
  console.log(numero) // 1, 3, 4, 5
}

/*********/
var chapeuSeletor = (bruxo) => {
  var casas = ['Grifinófia', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
  var casa = casas[Math.floor(Math.random() * casas.length)]

  console.log(`Bruxo: ${bruxo} | Casa: ${casa}`);
}

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

for(var bruxo of bruxos) {
  chapeuSeletor(bruxo)
}