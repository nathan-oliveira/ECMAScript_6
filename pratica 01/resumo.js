/*Resumo - Métodos Auxiliares

Os métodos auxiliares nos permite iterar um array de forma muito mais clara e simples. Neste capítulo, vimos 5 delas: forEach, map, filter, find, every, some e o reduce. Apesar de terem uma sintaxe muito parecida, cada um tem uma função bem específica. Abaixo, segue um exemplo de como utilizá-las:

forEach

Utilizamos para quando precisamos passar por todos os nossos itens de um Array.

Exemplo: exibir todos os seus itens no console.*/

var numeros = [1,2,3,4,5];
numeros.forEach(function(numero){
  console.log(numero);
});
// saída
// 1
// 2
// 3
// 4
// 5
/*
map

Perfeita para quando precisamos não somente passar por todos os itens, mas fazer algo com eles. 

Exemplo: dobrar todos os valores.
*/
var numeros = [1,2,3,4,5];
var dobro = numeros.map(function(numero){
  return numero * 2;
});

console.log(dobro); // 2, 4, 6, 8, 10
/*
filter

Ótima para filtrar itens da nossa lista.

Exemplo: listar somente os números pares.
*/
var numeros = [1,2,3,4,5];
var pares = numeros.filter(function(numero){
  return numero % 2 === 0;
});

console.log(pares); // 2, 4
/*
find

Se estiver procurando um item da lista, utilize o find. Lembrando que ele só devolve apenas a primeira ocorrência do item que bate com a condição da busca. 

Exemplo: encontrar o número dois.
*/
var numeros = [1,2,3,4,5];
var valor = numeros.find(function(numero){
  return numero == 2;
});

console.log(valor); // 2
/*
every

Essa função é excelente para quando precisamos validar se todos os itens da lista atendem a um critério em comum.

Exemplo: validar se todos os valores são menores que 10
*/
var numeros = [1,2,3,4,5];
var todosMenoresQueDez = numeros.every(function(numero){
  return numero < 10;
});

console.log(todosMenoresQueDez); // true
/*
some

Esta função valida se há pelo menos um item que atende a um critério.

Exemplo: validar se há algum número três na lista
*/
var numeros = [1,2,3,4,5];
var peloMenosUmNumeroTres = numeros.some(function(numero){
  return numero === 3;
});

console.log(peloMenosUmNumeroTres); // true
/*
reduce

O reduce faz a redução dos itens de um array.

Exemplo: calcular a soma de todos os itens da lista
*/
var numeros = [1,2,3,4,5];
var soma = numeros.reduce(function(soma,numero){
  return soma + numero;
},0);

console.log(soma); // 15