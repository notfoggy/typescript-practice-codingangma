import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Class from "./class_chapter";
import Generic from "./generic_chapter";

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

  return (
    <>
      {/* <Class /> */}
      <Generic />
    </>
  );
}

export default App;
