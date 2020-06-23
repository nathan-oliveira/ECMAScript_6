const Usuario = {
  nome: ' Nathan',
  sobrenome: 'Oliveira',
  senha: 'mrrobot',
  email: 'nathan_oliveiramendonca@hotmail.com',
  profissao: 'FullStack Developer',
  github: 'https://github.com/nathan-oliveira'
}

const { email, profissao, github } = Usuario;

console.log(email)
console.log(profissao)
console.log(github)

/**************************************/
const Pessoa = {
  nome: 'Nathan',
  sobrenome: 'Oliveira'
}

const { sobrenome:apelido, nome:primeiroNome } = Pessoa;
console.log(primeiroNome, apelido);
//

const suco = {
  sabor: 'laranja',
  quantidade: '500ml',
}

const doce = {
  tipo: 'açúcar'
}

function descreveSuco({sabor, quantidade}, {tipo}) {
  return `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`
}

console.log(descreveSuco(suco, doce))

/**************************************/
const cores = ['azul','cinza','branco', 'preto'];

const [cor1,,,cor2] = cores;
console.log(cor1, cor2);


const contatos = [
  {
    name: 'Alex Júnior',
    numero: '1234-5678'
  },
  {
    name: 'Carolina Moya',
    numero: '2234-5677'
  },
  {
    name: 'Fernando Jorge',
    numero: '3234-5676'
  }
];

// const[,Carol] = contatos;

function mostraNumero([,{numero}]) {
  console.log(numero)
}

mostraNumero(contatos);