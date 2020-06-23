// operações assíncronas com promises

function funcaoAssincrona(arg, callback) {
  // faz request para um webservice
  // logica do algoritmo


  callback();
}

funcaoAssincrona('Nathan', () => {
  console.log('terminou execução');
})

/*************************************************/
/*
let promise = new Promise((resolve, reject) => {
  let resultado = false;

  setTimeout(() => {
    if(resultado)
      resolve("ok")
    else
    reject("not ok");
  }, 2000)

  // if(resultado) {
  //   resolve('deu tudo certo');
  // } else {
  //   reject('deu tudo errado');
  // }
});

promise.then((data) => {
  console.log(`${data}`)
});
promise.catch((data) => {
  console.log(`${data}`)
});

console.log('fui executado!')
*/

/*************************************************/
let promise = new Promise((resolve, reject) => {
  resolve('ok!');
})

promise
  .then((data) => {
    console.log(`sucesso: ${data}`)

    throw new Error("erro!");

    return data
  })
  .then((data) => console.log(`sucesso: ${data}`))
  .catch((data) => console.log(`falha: ${data}`))