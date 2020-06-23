// function Pessoa(name) {
//   this._name = name;
// }

// Pessoa.prototype.getNome = function() {
//   return this._name;
// }

var Pessoa = (function() {
  var dadosPrivados = new WeakMap();

  function Pessoa(nome) {
    dadosPrivados.set(this, {name = nome});
  }

  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).name;
  }
}());

var nathan = new Pessoa('nathan');
console.log(nathan.getNome()); // nathan
console.log(nathan._name); // undefined

