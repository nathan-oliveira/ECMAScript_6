/*
Resumo - Módulos
Uma das estratégias consagradas em desenvolvimento de software para lidar com complexidade de código é a da modularização. Em termos simples, modularizar significa dividir o código em partes que representam uma abstração funcional e reaproveitável da aplicação. Modularizar um código permite que consigamos não somente organizá-lo, mas também reutilizá-lo. E isso se aplica a qualquer projeto e/ou linguagem de programação.

A fim de conseguir trabalhar com módulos no JavaScript, ao longo dos anos foram criados vários padrões. Dentre tantos criados, os que ganharam maior aceitação na comunidade foram dois: o CommonJS e AMD.

E para agradar a comunidade de ambas especificações e resolver o problema de vez, o ES6 trouxe a modularização para o JavaScript. Com o ES6, tudo o que temos no JavaScript agora é interpretado como um módulo. Podemos modularizar desde uma variável, uma função, até mesmo uma classe inteira. Cada módulo é armazenado em um arquivo JavaScript. Para que os módulos sejam compartilhados entre os diversos arquivos do código, precisamos utilizar as palavras reservadas import e export para importá-los e exportá-los, respectivamente.

Quando vamos exportar um módulo, utilizamos o export. Podemos fazer dois tipos de exportação: padrão ou nomeada. Na primeira, indicamos qual será o conteúdo exportado caso o desenvolvedor não especifique. No segundo caso, exportamos as várias parte do nosso módulo, seja uma função ou um método. Como neste exemplo:
*/

export const PI = 3.14;

function comprimento(raio) {
  return 2 * PI * raio;
}

function area() {
  return PI * (raio * raio);
}

export default comprimento; // padrão
export {area, PI}; // nomeado

// A exportação padrão é muito comum quando vamos exportar classes:

class Carro {
  // implementação do carro
}

export default Carro;

/*
Para importar, utilizamos o import. Podemos especificar os elementos que desejamos importar colocando entre chaves, como neste exemplo:
*/

// importando comprimento, somar e PI do módulo circunferência
import {comprimento, somar, PI} from './circunferencia';

/*
No from sempre colocamos o caminho relativo em relação ao arquivo em que estamos. Neste exemplo, ambos estão no mesmo nível.

Também podemos usar o * (asterisco) para importar tudo que o módulo expõe. O único porém é que o asterisco sempre nos retorna um objeto literal. Por este motivo, é necessário definir uma variável na qual ele será alocado antes que possamos usá-lo. No trecho a seguir, usamos circunferencia como esta variável.
*/

import * as circunferencia from './circunferencia';

circunferencia.comprimento(2); // ~ 12,5
circunferencia.raio(2);  // ~ 12,5
console.log(circunferencia.PI); // 3.14

/*
Entretanto, não é necessário usar o nome exato das propriedades do módulo quando o importamos para dentro do nosso código; é possível utilizar rótulos. Muitas vezes os módulos que queremos usar possuem nomes pouco intuitivos, ou no caso mais comum, estão em uma língua estrangeira. Podemos usar rótulos para diferenciá-los. Como neste exemplo, onde estamos importando o método adicionarPerfil de um módulo chamado Perfil, mas o estamos rotulando de adicionarJogador, usando o as.
*/

// rotulando o adicionarPerfil para adicionarJogador
import {adicionarPerfil as adicionarJogador} from './Perfil';

/*
Últimos detalhes:

Módulos são singletons: isso significa que mesmo que um módulo seja importado múltiplas vezes dentro de um projeto, somente uma “instância” dele vai existir.
Módulos podem importar coisas de outros módulos: isso significa que é possível utilizar dentro de um módulo coisas que foram importadas de outros módulos que ele usa.
Importações de módulos são hoisted: um detalhe bem importante que vale a pena citar é que tudo o que é importado é movido internamente para o topo do escopo atual. Em outras palavras, isso significa que o que você está importando está disponível em qualquer momento, mesmo que você tenha declarado o `import` do módulo só depois no código. Por exemplo:
*/

somar(1,2); // 3
import {somar} from './matematica'