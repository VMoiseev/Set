import Team from '../team';
import Character from '../app';

const member1 = new Character('Mark', 'Bowman');
const member2 = new Character('Bob', 'Daemon');
const member3 = new Character('Meggi', 'Magician');

test('Метод add должен добавлять выбранного персонажа в команду (объект класса Character)', () => {
  const team = new Team();
  team.add(member1);
  const expected = new Set([member1]);
  expect(team.members).toEqual(expected);
});

test('Должна генерироваться ошибка при добавлении персонажа, который уже есть', () => {
  const team = new Team();
  team.add(member1);
  expect(() => team.add(member1)).toThrow();
});

test('Метод addAll должен иметь возможность добавлять произвольное количество персонажей в команду', () => {
  const team = new Team(member3);
  team.addAll(member1, member2);
  const expected = new Set([member1, member2]);
  expect(team.members).toEqual(expected);
});

test('Метод addAll не должен позволять дублирование при добавлении', () => {
  const team = new Team();
  team.addAll(member1, member1, member2);
  expect(team.members.size).toBe(2);
});

test('Метод toArray должен производить конвертацию Set в массив', () => {
  const team = new Team();
  team.addAll(member1, member2, member3);
  const array = [member1, member2, member3];
  expect(team.toArray()).toEqual(array);
});
