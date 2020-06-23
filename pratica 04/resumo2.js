/*
Resumo - Set e WeakSet
Set

O Set é uma estrutura de dados que nos permite ter listas com valores que nunca se duplicam e que mantém a ordem de inserção dos seus itens. Sua utilização também é muito simples. Seus principais métodos são: add, delete, clear e o has.
*/

var set = new Set();
set.add(1); // adiciona um item
set.has(1); // verifica se o item já foi inserido
set.delete(1); // deleta
set.clear(); // remove todos os itens

/*
E como o Set também é um objeto iterável, podemos usar o for...of nele:
*/

var set = new Set([1,2,3,4,5]); // inicializando o set no construtor

for (const valor of set) {
  console.log(valor); // 1 2 3 4 5
}

/*
WeakSet

O WeakSet é um Set que não previne os seus elementos de serem coletados pelo Garbage Collector. Uma vez que o elemento não existe mais e seja identificado pelo coletor para ser coletado, ele também é automaticamente removido do WeakSet. Além disso, há três restrições importantes nesta estrutura que o diferem do Set:

- Só é possível adicionar objetos: valores de tipos primitivos como números e strings não são aceitos 
- O WeakSet não é iterável: isso significa que não podemos usar laços de repetição como o for...of nele
- Não há como remover todos os elementos de uma vez: esta estrutura não implementa o método clear, pois a lista é mantida "automaticamente" pelo Garbage Collector.

Quando dizemos que a lista se mantém automaticamente, isso significa que não é preciso se preocupar com vazamentos de memória, pois a lista nunca vai conter uma referência para algo que não existe mais. Há poucas circunstâncias nas quais ele poderá ser útil no dia a dia. Existem muitas discussões em fóruns e blogs de desenvolvimento sobre as possíveis utilidades da estrutura de WeakSet. Um dos casos de uso mais interessante é o de garantir que certo método ou propriedade pertence a um objeto específico e não a todas as instâncias do mesmo tipo. Mas no uso geral, sempre que você tiver preocupação com vazamento de memória, o WeakSet estará a seu dispor.
*/