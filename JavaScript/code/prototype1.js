//;コンストラクタ関数
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  //;preson1目線で考えて！！！！！！！！！！！！！！！！
  //;preson1から見たプロトタイプはPerson.prototype
  //;だから、Personにintroduceメソッドを追加したい場合は
  //;子インスタンスが参照できるようにPerson.prototypeに追記しなくてはいけない。
  Person.prototype.introduce = function() {
    console.log(`名前は${this.firstName} ${this.lastName}です。年齢は${this.age}です。`);
  };
  
  //;コンストラクタ関数で生成されたオブジェクトperson1のプロトタイプは
  //;コンストラクタ関数名.prototypeになる。例:Person.prototype
  const person1 = new Person('太郎', '田中', 25);
  
  console.log(person1.constructor);  // [Function: Person]

  console.log(Person.prototype);     // { introduce: [Function(anonymous)] } 
  console.log(person1.__proto__);    // { introduce: [Function(anonymous)] } 
  console.log(person1.__proto__ === Person.prototype);  // true
  
  console.log(Object.prototype); // [Object: null prototype] {}
  console.log(person1.__proto__.__proto__ ); // [Object: null prototype] {}
  console.log(person1.__proto__.__proto__ === Object.prototype);  // true