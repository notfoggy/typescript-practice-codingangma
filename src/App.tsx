import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // interface User {
  // 	name: string;
  // 	age: number;
  // }

  // function join(name: string, age: number): User;
  // function join(name: string, age: string): string;
  // function join(name: string, age: number | string): User | string {
  // 	if (typeof age === 'number') {
  // 		return {
  // 			name,
  // 			age,
  // 		};
  // 	} else {
  // 		return '나이는 숫자로 입력해주세요';
  // 	}
  // }

  // const sam: User = join('Sam', 30);
  // const jane: string = join('jane', '30');

  class Car {
    name: string = "car";
    color: string;
    age: number;
    constructor(color: string, age: number) {
      this.color = color;
      this.age = age;
    }
    start() {
      console.log("start");
      console.log(this.name);
    }
  }
  class Bmw extends Car {
    showName() {
      console.log(this.name);
    }
  }

  const z4 = new Bmw("red", 23);
  const a4 = new Car("black", 30);
  console.log("z4.name", z4.name);
  console.log("z4.color", z4.color);
  console.log("z4.age", z4.age);
  console.log("a4.name", a4.name);
  console.log("a4.color", a4.color);
  console.log("a4.age", a4.age);

  return <></>;
}

export default App;
