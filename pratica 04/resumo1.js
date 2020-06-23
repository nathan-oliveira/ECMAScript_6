/*
Resumo - Map e WeakMap

Com a chegada do ES6, o JavaScript introduz duas novas estruturas de dados: Map e WeakMap. Essas estruturas, ao contrário da tradicional concepção de que todos objetos são mapas, são implementações reais de mapas como estrutura de dados, assim como já estamos acostumados a ver em outras linguagens. Estas novas estruturas nos permitem:

- Adicionar elementos pelo par (chave, valor);
- Remover elementos pela chave;
- Acessar elementos dada uma chave;
- Pesquisar elementos, descobrindo se ele pertece ou não a coleção por meio da chave;
- Indagar sobre atributos, como o número de elementos, por exemplo.
- Etc

Map

Em um Map do JavaScript, qualquer valor (tanto objetos, funções ou valores primitivos) podem ser usados como chave ou valor. Os principais métodos e propriedades são: set, get, size, has, delete, clear.
*/

var mapa = new Map(); // cria um mapa
mapa.set('um', 1); // insere uma chave-valor

// retorna o número de dados dentro do mapa
console.log(mapa.size) // 1

//retorna o valor dada a chave
mapa.get("um"); // 1

mapa.delete("um"); // deleta dado um valor associado a uma chave
mapa.has("um"); // verifica se existe a chave dentro do mapa
mapa.clear(); // remove todos os itens do mapa

/*
E como vimos nos capítulos anteriores, o Map é um objeto iterável. Sendo assim, podemos utilizar o laço for...of para iterá-los através dos métodos: keys, values e entries. Eles retornam todas as chaves, todos os valores e todas as entradas (par chave/valor), respectivamente.
*/

var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('três', 3);

// itera todas as chaves
for(var chave of mapa.keys()){
  console.log(chave); // um dois três
}

// itera todos os valores
for(var valor of mapa.values()){
  console.log(valor); // 1 2 3
}

// itera todas as entradas
for(var entrada of mapa.entries()){
  console.log(entrada);
}
// saída:
// [ 'um', 1 ]
// [ 'dois', 2 ]
// [ 'três', 3 ]

/*
WeakMap

Um WeakMap é uma coleção de pares de chave/valor na qual as chaves só podem ser objetos. As referências do objetos nas chaves são fracamente mantidas. Isso significa que eles não estão previnidos de serem coletados pelo Garbage Collector caso não existir nenhuma outra referência para o objeto em memória. Como toda chave do WeakMap necessariamente precisa ser um objeto, se tentamos utilizar qualquer outro tipo de valor no lugar, tomamos um erro. Além disso, dos métodos que vimos em Map, somente temos quatro deles disponíveis aqui: delete, has, get e set. Não temos como limpar todos os dados de uma vez (método clear) e nem ter uma visão geral do conteúdo do WeakMap (método entries) por causa da natureza fraca das ligações.

Ao usar um WeakMap, conseguimos esconder a propriedade que guarda o valor e oferecer somente um método para recuperá-lo. Como no exemplo a seguir:
*/

var Pessoa = (function() {
  var dadosPrivados = new WeakMap();
  function Pessoa(nome) {
    dadosPrivados.set(this,{ nome: nome });
  }
  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).nome;
  };
  return Pessoa;
}());

var nathan = new Pessoa('Nathan');
console.log(nathan.getNome()); // Nathan
console.log(nathan.nome); // undefined