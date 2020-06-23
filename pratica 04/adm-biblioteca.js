var livros = [
  {titulo: "O Poder do Hábito", autor: "Charles Duhigg", local: "A1"},
  {titulo: "Como fazer amigo e Influenciar Pessoas", autor: "Dale Carnegie", local: "D2"},
  {titulo: "Geração de Valor", autor: "Flávio Augusto da Silva", local: "L3"},
  {titulo: "Os segredos da mente milionária", autor: "T. Hary Eker", local: "O4"}
];

var estantes = new Map();
for(var livro of livros) {
  estantes.set(livro.titulo, livro.local); // titulo = chave, local = valor
}

function getLocalizacaoDoLivro(titulo) {
  var estante = estantes.get(titulo); // busca pela chave

  if(estante === undefined) {
    return "Livro não encontrado no acervo!"
  }

  return estante; // retona o valor
}
var localizacao = getLocalizacaoDoLivro("Geração de Valor");
console.log(localizacao);
