export const PI = 3.14;

function comprimento(raio) {
  return 2 * PI * raio;
}

function area(raio) {
  return PI * (raio * raio);
}

export default comprimento; // padrão
export {area, comprimento} // nomeada