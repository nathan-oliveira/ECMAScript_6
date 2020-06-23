// Resumo - for...of
// Neste capítulo vimos como funciona um novo tipo de laço de repetição: o laço for...of.  Este tipo de laço foi criado para percorrer um objeto se, e somente se, ele for iterável. Seu funcionamento é bem simples. Sua sintaxe é:

for (variavel of iteravel) {
  // corpo
}
// A variavel representa uma variável de auxílio que assume valores diferentes a cada iteração, e o iteravel é o objeto que será iterado. O caso de uso mais recorrente deste tipo de laço é para passar por todos os valores contidos em um Array, Set ou um Map. 

// Sua utilização é muito simples.

// Exemplo: iterar uma lista de números

var numeros = [1,2,3,4,5];
for(var numero of numeros) {
  console.log(numero);
}
// E assim como em outros laços de repetição, o break e o continue também funcionam dentro de laços for...of. Usamos o break para interromper a execução de um laço.

// Exemplo: Interrromper se houver um número maior que 3

var numeros = [1,2,3,4,5];
for(var numero of numeros) {
  if(numero > 3) {
    break;
  }
  console.log(numero);
}
// 1 2 3
// Já o continue usamos para indicar que o laço deve ser continuado, passando imediatamente para o próximo item. 

// Exemplo: Colocar uma condição no laço para nunca imprimir no console o número dois

var numeros = [1,2,3,4,5];
for(var numero of numeros) {
  if(numero === 2) {
    continue;
  }
  console.log(numero);
}
// 1 3 4 5
