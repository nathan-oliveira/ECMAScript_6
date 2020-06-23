/*
Resumo - Desestruturamento
Podemos definir a desestruturação como uma maneira de extrair valores armazenados em objetos e Arrays. A sua ideia é permitir que usemos a mesma sintaxe de construção de dados para extrair dados. Como neste exemplo:
*/

const Usuario = {
  nome: ' Elliot',
  sobrenome: 'Alderson',
  senha: 'mrrobot'
  email: 'elliot.alderson@gmail.com',
  profissao: 'Engenheiro de Cibersegurança'
  github: 'https://github.com/ElliotAlderson'
}
 
const {email} = Usuario;
console.log(email); // elliot.alderson@gmail.com

/*
Quando o código é executado, o valor de Usuario.email é extraído e atribuído para uma variável de mesmo nome do atributo, email. O efeito é o mesmo para extrair múltiplos valores de dentro do objeto:
*/
const {senha, confirmacaoSenha} = Usuario;
console.log(senha); // mrrobot
console.log(confirmacaoSenha); // mrrobot

/*
Entretanto, se tentamos extrair o valor de uma propriedade que não existe dentro do objeto Usuario, como uma propriedade chamada numeroDoCartao, por exemplo, não receberemos nenhum erro, mas a variável volta atribuída com undefined.

Rótulos

Mas nem sempre o nome da propriedade que extraímos de um objeto é bom ou claro o suficiente para nomear uma variável. Para reverter esta situação, podemos fazer uso de rótulos. Assim, conseguimos associar qualquer nome para a variável que será criada com o valor da propriedade que queremos extrair. Atribuir um rótulo é muito simples, basta seguir a sintaxe <propriedade>:<label> na desestruturação.
*/

const {email:enderecoEletronico} = Usuario;
console.log(enderecoEletronico); // elliot.alderson@gmail.com

/*
Arrays

Também podemos fazer a desestruturação de Arrays, como neste exemplo, onde obtemos somente a primeira e última cores da lista:
*/

const [cor1,,,cor2] = ['azul', 'cinza', 'branco', 'preto'];

console.log(cor1); // azul
console.log(cor2); // preto