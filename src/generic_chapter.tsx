import React from "react";

const Generic = () => {
  // 수업 1.
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }
  const arr1 = [1, 2, 3];
  getSize<number>(arr1);

  const arr2 = ["a", "b", "c"];
  getSize<string>(arr2);

  const arr3 = [false, true, false];
  getSize<boolean>(arr3);

  const arr4 = [{}, {}, { name: "Tim" }];
  getSize<object>(arr4);

  // 수업 2
  interface Mobile<T> {
    name: string;
    price: number;
    // option: any; // null이나 undefined가 올 수도 있는 문제.. null, undefined는 any타입에 속하지 않는다. generic쓰자
    option: T;
  }

  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good",
  };

  //   console.log("m1", m1);
  //   console.log('m2', m2);

  // 수업3
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: boolean;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "a", age: 10 };
  const car: Car = { name: true, color: "red" };
  const book: Book = { price: 3000 };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  //   function showName(data: { name: string }): string {
  //     return data.name;
  //   }

  showName(user);
  //   showName(car);
  //   showName(book);

  return <div></div>;
};

export default Generic;
