/*
Resumo - Operadores Rest e Spread
Rest

A sintaxe do recém-chegado operador Rest nos permite representar um número indefinido de argumentos em um Array. Se o último argumento nomeado de uma função estiver acompanhado de três pontos, ele vai se tornar um Array no qual os elementos são disponibilizados pelos argumentos atuais passados à função. Por exemplo:
*/
imprimeMensagens('teste1', 'teste2', 'teste3');

function imprimeMensagens(...mensagens) {
  mensagens.forEach(function(mensagem) {
    console.log(mensagem);
  })
}
// teste1
// teste2
// teste3

/*
Um ponto importante que precisamos ficar de olho diz respeito ao fato de que este operador só funciona no último argumento nomeado de uma função. Isso significa que não podemos utilizar mais de um operador Rest por função. Veja o seguinte caso, no qual pretendemos separar números e letras:
*/

function numerosELetras(...numeros, ...letras) {
  // corpo da função
}

/*
Isto simplesmente não funciona. O operador sempre interpreta as últimas variáveis passadas na função para compactá-las em um único Array. Apesar de a separação parecer fazer sentido para a chamada a seguir, não funcionará como esperado.

Mas como o operador sempre interpretará unicamente os últimos argumentos passados na função, podemos definir variáveis que ficam de fora do operador. Vamos chamá-los de parâmetros fixos. Para atestar o que isto significa, podemos criar uma função que faz a soma de inúmeros valores e, no final, multiplica essa soma por um outro valor. Esta função se chama somaTudoEMultiplicaPor e seu primeiro parâmetro multiplicador será fixo, enquanto os ...valores podem variar.
*/

function somaTudoEMultiplicaPor(multiplicador, ...valores){
  return valores.reduce((soma, valor) => {
    return soma + (valor * multiplicador);
  }, 0);
}
console.log(somaTudoEMultiplicaPor(2,1,2)); // 6
console.log(somaTudoEMultiplicaPor(2,6,7)); // 26

/*
Spread

Quando trabalhamos com funções no JavaScript, nós as utilizamos passando os parâmetros — sempre que aplicável — que desejamos que sejam considerados na sua execução. Um exemplo de método que recebe parâmetros e que já foi usado várias vezes ao longo do curso é a própria função log do console, que estamos usando para exibir valores no console do navegador. Em muitos casos, os múltiplos argumentos que queremos passar para uma função estão contidos em uma lista. Então, para usá-los, temos de recuperá-los um a um, acessando os seus índices, e passá-los individualmente:
*/

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1, 2, 3

/*
No ES5, para evitar ficar fazendo isso e já passar de uma vez a lista inteira como argumento para a função, podemos usar a função apply, disponível em todas as funções do JavaScript. Este método aceita dois parâmetros: o primeiro deles representa o contexto de execução (this) que será considerado; o segundo é um Array que representa os argumentos que serão passados para a função. 
*/

var argumentos = [1,2,3];
console.log.apply(console, argumentos);
// 1, 2, 3

/*
Com o ES6, temos uma alternativa semelhante, porém otimizada, o operador Spread. Podemos remover a função apply e simplesmente inserir como parâmetro do log os três pontos acompanhado com o nome do Array que queremos que seja extraído — neste caso, a variável argumentos. O operador vai interpretar cada item contido em argumentos e passará para a função como se fossem parâmetros separados. Ao final, o resultado será equivalente a ter invocado console.log(1,2,3).
*/

const argumentos = [1,2,3];
console.log(...argumentos) // 1, 2, 3

/*
Operador Rest x Operador Spread

Apesar de ambos utilizarem a notação de três pontos, o funcionamento deles é totalmente diferente:

* O operador Rest coleta os itens e coloca-os em um Array;
* O operador Spread torna um Array (e outros objetos iteráveis) em itens individuais.

Entretanto, isso não nos impede de usá-los em conjunto. Para ver como, primeiro alteramos o argumento do nosso método para aceitar não só um parâmetro, mas um número indefinido deles. Fazemos essa alteração com o operador Rest:
*/

function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  // lógica da função
}

/*
Agora alteramos a nossa lógica para contar as vogais não acentuadas, não somente de uma palavra, mas da quantidade de palavras que serão enviadas no momento em que a função for invocada:
*/

function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  let qtdVogais = 0;
  for(let palavra of palavras) {
    let palavraLowerCase = palavra.toLowerCase();
    const letras = [... palavraLowerCase];
    for(let letra of letras) {
      if("aeiou".indexOf(letra) !== -1) {
        qtdVogais++;
      }
    }
  }
  return qtdVogais;
}
