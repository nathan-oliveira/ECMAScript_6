/*Resumo - Iteradores e Iteráveis

O ES6 introduziu um novo mecanismo para que possamos lidar com listas. O protocolo de iteração não é novo e já é utilizado em muitas linguagens de programação como o Java, Python e C# — mas somente agora foi padronizado no JavaScript. A iteração é definida por dois conceitos centrais: iteradores e iteráveis.

Definimos como um iterador um objeto que sabe como acessar, um a um, os itens de um iterável, enquanto mantém o status da sua posição atual na estrutura. Esses objetos oferecem o método next, que retorna o próximo item da estrutura do iterável sempre que invocado. Um objeto é definido como iterável se ele define explicitamente o seu comportamento de iteração. Para isso, é necessário que ele implemente o seu iterador na propriedade de chave Symbol.iterator. No JavaScript, alguns tipos já são iteráveis por padrão:

Arrays
Strings
Maps
Sets
Para cada vez que chamamos o método next, ele nos retorna um objeto com duas propriedades: value e done. A primeira contém o valor armazenado na estrutura que foi recuperado. A segunda é um booleano que nos diz se todos os itens da estrutura foram acessados.

Apesar de não ser a melhor maneira de utilizá-lo, podemos acessar o iterator da estrutura diretamente para utilizá-lo no código.

Exemplo: recuperar o nome de cada um dos bruxos.
*/

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

var iterador = bruxos[Symbol.iterator]();
var proximo = iterador.next();
do {
    var bruxo = proximo.value;
    chapeuSeletor.fazerSelecaoDaCasa(bruxo);
    proximo = iterador.next();
} while (!proximo.done);