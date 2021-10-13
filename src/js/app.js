const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка! Имя персонажа должно быть от 2 до 10 символов');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка! Такой персонаж не существует');
    }
  }
}
