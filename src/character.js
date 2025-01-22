class Character {
    constructor(name, type) {
      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (name.length < 2 || name.length > 10) {
        throw new Error('Name must be between 2 and 10 characters.');
      }
      if (!allowedTypes.includes(type)) {
        throw new Error(`Type must be one of: ${allowedTypes.join(', ')}`);
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  }
  
  class Bowerman extends Character {
    constructor(name) {
      super(name, 'Bowman');
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
      this.attack = 40;
      this.defence = 10;
    }
  }
  
    
  export { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };
  