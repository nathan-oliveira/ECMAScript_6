/*

Resumo - Valores padrões
No JavaScript, quando declaramos e invocamos funções, elas possuem por definição seus parâmetros como undefined. Na prática, isso significa que, se não indicamos explicitamente qual o valor que queremos que o parâmetro tenha na execução do método, o valor assumido sempre será undefined, independente do número de parâmetros. Com o ES6, ganhamos a capacidade de adicionar valores predefinidos aos parâmetros de nossas funções.

Para isso, basta que na sua declaração, você indique qual o valor padrão dela, por exemplo:

*/
function telefones(telefonePrincipal, telefoneSecundario = telefonePrincipal) {
  // implementação
}
/*
Neste caso, estamos usando o telefonePrincipal como valor padrão para o telefoneSegundario. Desta maneira, caso seja passado o primeiro argumento da função, ambas vão assumir o mesmo valor. Mas também poderíamos ter "chumbado" um valor ou usado a referência de alguma outra variável como valor padrão.

Só precisamos ter uma atenção especial a variáveis com valor `undefined`. Uma vez que definimos uma função que contenha um parâmetro com valor predefinido, se a invocarmos e o parâmetro correspondente for equivalente a `undefined` na hora de sua execução, o valor predefinido que será considerado.
*/