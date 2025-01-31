class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    // Personクラスブロック内でメソッドを追加
    introduce() {
      console.log(`名前は${this.firstName} ${this.lastName}です。年齢は${this.age}です。`);
    }
  }
  const person1 = new Person('太郎', '田中', 25);
  person1.introduce();  // "名前は太郎 田中です。年齢は25です。"

  //;※クラスの定義でintroduceメソッドを定義したタイミングで
  //;インスタンスのプロトタイプPerson.prototypeに自動的に追加されるが
  //;非列挙プロパティとして扱われるため、console.log(Person.prototype)で表示されない。
  console.log(Person.prototype);

  //;非列挙プロパティの表示はgetOwnPropertyNamesを使う。
  //;["constructor", "introduce"]とはPerson.prototypeが持つ全プロパティを示してる。
  console.log(Object.getOwnPropertyNames(Person.prototype));  // ["constructor", "introduce"]
