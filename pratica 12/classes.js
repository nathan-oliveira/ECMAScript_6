// modelo, chassi, qtdPortas
/* ES5
function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo
  this.chassi = chassi
  this.qtdPortas = qtdPortas
}

Carro.prototype.andar = function() {
  console.log('Vrum Vrum')
}

function Sonix(modelo, chassi, qtdPortas){
  Carro.call(this, modelo, chassi, qtdPortas)
}
Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

Sonix.prototype.abrirTetoSolar = function() {
  console.log('abrindo teto solar')
}

var sonix = new Sonix('Sonix', '9231221', 5)
console.log(sonix.modelo)
sonix.andar();
sonix.abrirTetoSolar();
*/

//ES6
class Carro {
  constructor(modelo, chassi, qtdPortas) {
    this.modelo = modelo
    this.chassi = chassi
    this.qtdPortas = qtdPortas
  }

  andar() {
    console.log('Vrum Vrum');
  }
}
/*
const CarroBasico = new Carro('Basico', '2343122312', 2);
console.log(CarroBasico.modelo)
CarroBasico.andar();
*/
class Sonix extends Carro {
  // constructor(modelo, chassi, qtdPortas, x, y) {
  constructor(modelo, chassi, qtdPortas) {
    super(modelo, chassi, qtdPortas);
    // this.x = x;
    // this.y = y;
  }

  abrirTetoSolar() {
    console.log('abrindo teto solar')
  }
}

const sonix = new Sonix('Sonix', '0131313', 5);
sonix.abrirTetoSolar();
sonix.andar();
console.log(sonix.modelo)

/********************************
const Car = {
  constructor(modelo) {
    this.modelo = modelo
  }
}

const car = new Car('Sonix');
console.log(car.modelo);
*/
class Car {
  static abrirPorta() {
    console.log('abrindo porta')
  }

  static fecharPorta() {
    console.log('fechando porta')
  }
}

Car.abrirPorta();
Car.fecharPorta();

/***********/
// WeakMap

const WeakProps = new WeakMap();

class VideoGame {
  constructor(nome, controles, saida, midia) {
    WeakProps.set(this, {nome, controles, saida, midia})
  }

  recuperaProps(props) {
    return WeakProps.get(this)[props];
  }
}

const caixa360 = new VideoGame('caixa360', 4, 'hdmi', 'dvd')
console.log(caixa360.recuperaProps('nome'))