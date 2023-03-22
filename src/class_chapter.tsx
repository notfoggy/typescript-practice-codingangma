const Class = () => {
  abstract class Car {
    readonly name: string = "car";
    color: string;
    age: number;
    static wheels = 4;
    constructor(color: string, age: number) {
      this.color = color;
      this.age = age;
    }
    start() {
      console.log("start");
      console.log(this.name);
      console.log(Car.wheels);
    }
    abstract doSomething(): void;
  }
  class Bmw extends Car {
    navigation: string;
    constructor(color: string, age: number, navigation: string) {
      super(color, age);
      this.navigation = navigation;
    }
    showName() {
      return this.name;
    }
    doSomething() {
      alert(3);
    }
  }

  const z4 = new Bmw("red", 23, "apple");
  // z4.name = 'zzzz';
  console.log("z4.showName()", z4.showName());
  console.log("z4.name", z4.name);
  console.log("z4.color", z4.color);
  console.log("z4.age", z4.age);
  console.log("z4.navigation", z4.navigation);
  console.log("z4.wheels", Car.wheels);

  // const a4 = new Car('black', 30); // abstract class는 new 연산자로 객체 생성 불가
  // console.log('a4.name', a4.name);
  // console.log('a4.color', a4.color);
  // console.log('a4.age', a4.age);
  // console.log('a4.wheels', Car.wheels);

  return <></>;
};

export default Class;
