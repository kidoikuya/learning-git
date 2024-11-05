class Hero {
    constructor(name) {
      this.name = name;
    };
    attack() {
      console.log(`${this.name}は敵に10のダメージを与えた`);
    };
  }
  class SuperHero extends Hero {
    constructor(name) {
      // Heroクラスのコンストラクタの呼び出し
      super(name);
    };
    superAttack() {
      console.log(`${this.name}は敵に20のダメージを与えた`);
    };
  }
  class UltraHero extends SuperHero {
    constructor(name) {
      // SuperHeroクラスのコンストラクタの呼び出し
      super(name);
    };
    ultraAttack() {
      console.log(`${this.name}は敵に30のダメージを与えた`);
    };
  }
  const a = new UltraHero("Taro");
  a.ultraAttack();  // UltraHeroクラスのメソッドを実行
  a.superAttack();  // superHeroクラスのメソッドを実行
  a.attack();  // Heroクラスのメソッドを実行