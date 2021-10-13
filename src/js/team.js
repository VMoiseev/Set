export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж уже в команде');
    } else {
      this.members.add(member);
    }
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
  }

  toArray() {
    return [...this.members];
  }
}
