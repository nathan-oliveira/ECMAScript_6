var weakMap = WeakMap();
var elemento1 = {atr: 1};
var elemento2 = {atr: 2};

weakMap.set(elemento1, 'sou o elemento 1');
weakMap.set(elemento2, 'sou o elemento 2');

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));

/*
elemento2 = null;
setTimeout(function() {
  console.log(weakMap.get(elemento2));
}, 3000)
*/

// delete, has, get, set
