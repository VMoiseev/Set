import Character from '../app';

test('Корректное создание класса Character', () => {
  const received = new Character('Bob', 'Daemon');
  const expected = {
    name: 'Bob',
    type: 'Daemon',
  };
  expect(received).toEqual(expected);
});

test('Должна выбрасываться ошибка если имя содержит меньше двух символов', () => {
  expect(() => new Character('B', 'Daemon')).toThrowError('Ошибка! Имя персонажа должно быть от 2 до 10 символов');
});

test('Должна выбрасываться ошибка если имя содержит больше 10 символов', () => {
  expect(() => new Character('Bobbbbbbbbbb', 'Daemon')).toThrowError('Ошибка! Имя персонажа должно быть от 2 до 10 символов');
});

test('Должна выбрасываться ошибка при попытке передать некорректный тип персонажа', () => {
  expect(() => new Character('Bob', 'Daemonic')).toThrowError('Такой персонаж не существует');
});
