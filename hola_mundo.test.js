const saludar = require('./hola_mundo');

test('Saludar función debe devolver "¡Hola, mundo!"', () => {
  expect(saludar()).toBe('¡Hola, mundo!');
});
