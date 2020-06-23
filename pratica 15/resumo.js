/*
Resumo - Promises
Uma das grandes novidades do ES6 — e que já era aguardada há bastante tempo pela comunidade — é o suporte nativo a promises. De forma simples e resumida, promises são objetos que nos auxiliam a trabalhar com operações assíncronas. Este tipo de objeto aguarda a operação ser completada e oferece uma resposta positiva (resolvida) para quando realizada com sucesso, ou negativa caso algo tenha ocorrido algum erro no processo (rejeitada).

Uma promise, em sua essência, possui três estados:

Não resolvido: estado inicial, quando está esperando algo ser finalizado;
Resolvido: estado no qual a operação foi concluída, sem erros;
Rejeitado: estado no qual a operação foi concluída, porém, com erros.
Para os dois últimos estados, resolvido e rejeitado, associamos funções que queremos que sejam executadas. Para isso, usamos as palavras reservadas then e catch.

Sabendo disso, já podemos começar a codificar e construir o esqueleto de uma promise.
*/

let promise = new Promise((resolve, reject) => {
  // corpo da promise
});

promise.then(data => {});
promise.catch(data => {});

/*
Por padrão, o construtor da promise recebe uma função com dois argumentos: resolve e reject. Utilizamos estes parâmetros dentro da lógica de nossa promise para indicar quando ela foi resolvida ou rejeitada. Quando um promise é resolvida sem problemas, o then é automaticamente ativado, assim como acontece com o catch quando a promise é rejeitada. Por exemplo:
*/

let promise = new Promise((resolve, reject) => {
  let resultado = true;
  if(resultado) {
    resolve("deu tudo certo!");
  } else {
    reject("deu tudo errado!");
  }
});

/*
Quando utilizamos o reject nas nossas promises, estamos tratando os casos em que já esperamos de antemão que algum cenário possa dar problema. Entretanto, há situações nas quais erros que o desenvolvedor não esperava podem acontecem. Como no exemplo a seguir, onde foi inserido um erro intencionalmente na execução do código para simular este cenário.
*/

let promise = new Promise((resolve, reject) => {
  throw new Error('erro!');
  resolve('ok!');
});

promise
  .then((data) => console.log(`sucesso: ${data}`))
  .catch((data) => console.log(`falha: ${data}`));

/*
Quando o código é executado, ao acontecer o erro, o catch é invocado imediatamente, mesmo que exista vários then aninhados.
*/