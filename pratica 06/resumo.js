/*
Resumo - Template Strings
Felizmente para nós desenvolvedores, grande parte das linguagens de programação de alto nível já possuem a estrutura de String, que nada mais é do que uma abstração de alto nível de uma cadeia de caracteres. A estrutura de String nos oferece muitas regalias, mas como vida de programador não é nada fácil, lidar com strings ainda tem vários probleminhas.

Para aliviar estas dores de cabeça, o ES6 trouxe o conceito de Template Strings. Há dois tipos:

* Template strings simples;
* Template strings marcardos (tags).

Esses Templates são estruturas que nos permite formar expressões com strings usando funcionalidades como interpolação e multilinhas. Ambos os tipos são features emprestadas da linguagem de programação E, criada em 1997 por Mark S. Miller e Dan Bornstein na Eletric Communites. Nesta linguagem, os Templates Strings são chamados de quasi literals.

Template strings simples

Para utilizar, basta utilizarmos as crases (`) ao invés das aspas (simples ou duplas). Com ela, podemos inserir diretamente o valor de variáveis dentro de uma string e manter a sua formação sem fazer uso de escapes, como neste exemplo: 
*/

const n1 = 1, n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
// 1 + 2 = 3

/*
Para interpolar os valores, utilizamos as chaves ({}). Qualquer expressão que é jogada lá dentro é resolvida e então inserida dentro da string, como fizemos neste exemplo.

Template strings marcadas

Ao marcar uma Template String, conseguimos modificar seus valores com uma função. Como neste exemplo, onde modificamos a mensagem e boas vindas de acordo com o horário de acesso:
*/

function defineMensagem(strings, ...values) {
  const hora = values[1];
  if(hora >= 6 && hora <= 12) {
    values[0] = "Bom dia";
  } else if (hora > 12 && hora <= 18) {
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite";
  }
  values[0] = `${values[0]}, são`;
  return `${values[0]}${strings[0]}${hora}${strings[2]}`
}

/*
As funções de Template String Marcados recebem pelo menos 2 parâmetros. O primeiro é um array com todas as strings enquanto os demais parâmetros representam os valores das expressões que foram inserids.
*/