// Map
var map = new Map();
function funcao() {};
var objeto = {};

// set -> adiciona elementos no mapa
map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma função");

// get -> busta uma chave no mapa
console.log(map.get("string")); //retorna 'sou uma string'
console.log(map.get(objeto)); //retorna 'sou um objeto'
console.log(map.get(funcao)); //retorna 'sou um função'

// size -> verifica o tamanho do mapa
console.log("tamnho: "+ map.size); //retorna o tamanho do map... 3

// has -> verifica se existe uma chave no mapa
console.log(map.has("string")); // true
console.log(map.has("string3")); // false

// delete -> dele uma chave do mapa
map.delete("string");
console.log(map.has("string"));

// clear -> remove todos os elementos do mapa
map.clear();
console.log(map.size);

/* map é um objeto iterável */
for(var chave of map.keys()) {
  console.log(chave); // retorna 'string, objeto, function'
}

for(var valor of map.values()) {
  console.log(valor); // retorna 'eu sou um ....'
}

for(var entrada of map.entries()) {
  console.log(entrada); // retorna
}