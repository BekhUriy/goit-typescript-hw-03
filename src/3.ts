/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard. 
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp. 
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/

// реалізація класу Wizard
interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

// тестування класу
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

export {};
