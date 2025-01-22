import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/character';

test('creating Bowerman', () => {
  const hero = new Bowerman('Legolas');
  expect(hero).toEqual({
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('name validation', () => {
  expect(() => new Bowerman('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('name validation', () => {
  expect(() => new Swordsman('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('name validation', () => {
  expect(() => new Magician('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('name validation', () => {
  expect(() => new Undead('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('name validation', () => {
  expect(() => new Daemon('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('name validation', () => {
  expect(() => new Zombie('A')).toThrow('Name must be between 2 and 10 characters.');
});

test('type validation', () => {
  expect(() => new Character('Legolas', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
