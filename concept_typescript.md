1. 접근제한자(Access modifier) - public, private, protected

   public - 자식 클래스, 클래스 인스턴스에서 모두 접근 가능
   protected - 자식 클래스에서 접근 가능
   private - 해당 클래스 내부에서만 접근 가능


2. readonly - 해당 멤버변수는 쓰기만 가능

3. static - 해당 클래스의 메소드에서 멤버변수에 접근할때, this로 접근하는게 아니고 그 클래스명으로 접근
          - 해당 클래스의 


	class Car {
		readonly name: string = 'car';
		color: string;
		age: number;
		static wheels = 4;
		constructor(color: string, age: number) {
			this.color = color;
			this.age = age;
		}
		start() {
			console.log('start');
			console.log(this.name);
			console.log(Car.wheels);  // -> 이곳이 this.wheels가 아니라 Car.wheels임
		}
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
	}

   const z4 = new Bmw('red', 23, 'apple');
   console.log(Car.wheels); // -> z4.wheels가 아님

	const a4 = new Car('black', 30);
	console.log('a4.wheels', Car.wheels); // -> a4.wheels가 아님


4. 추상클래스 - 클래스명 앞에 abstract
 - 추상화의 의미는, 프로퍼티나 메서드의 이름만 선언해주고, 구체적인 기능은 상속받는 쪽에서 구현해주는 것을 의미
 - new를 이용해서 객체를 만들 수 없다.
 - 오직 상속을 통해서만 사용 가능


   abstract class Car {
		readonly name: string = 'car';
		color: string;
		age: number;
		static wheels = 4;
		constructor(color: string, age: number) {
			this.color = color;
			this.age = age;
		}
		start() {
			console.log('start');
			console.log(this.name);
			console.log(Car.wheels);
		}
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
	}
	const z4 = new Bmw('red', 23, 'apple'); // 상속한 클래스이므로 new 연산자로 객체 생성 가능
	const a4 = new Car('black', 30);  // abstract클래스 자체로는 new 연산자로 객체 생성 불가능!!!

 
 - 추상클래스의 추상메서드는 상속받은 쪽에서 무조건 구현해주어야 한다.
   (추상클래스 Car클래스의 추상메서드나 추상프로퍼티는 해당클래스에서는 선언만, 상속한 클래스에서 기능을 구현)
   (추상클래스 Car클래스를 상속받아 만든 클래스들은 doSomething() 메서드를 가지고 있지만, 구체적인 기능은 가지각색임)

  
  	abstract class Car {
		readonly name: string = 'car';
		color: string;
		age: number;
		static wheels = 4;
		constructor(color: string, age: number) {
			this.color = color;
			this.age = age;
		}
		start() {
			console.log('start');
			console.log(this.name);
			console.log(Car.wheels);
		}
		abstract doSomething(): void; // 추상 메서드 선언
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
		doSomething() {  // 기능 구현해주어만 함.
			alert(3);
		}
	}

5. 함수 오버로드 (오벌드 시그니처) : 연관된 것들은 유니온 타입, 제네릭있음
 - TypeScript에서 함수 오버로드는 같은 함수명을 가진 함수에 대해 다른 매개변수 타입 및 반환 타입을 지정할 수 있는 기능
 - 특히, 인터페이스나 추상클래스에서 자주 사용함.

  function add(a: string, b?: string, c?: string): string; // (1) overolad signature
  function add(a: number, b?: number, c?: number): number; // (2) overolad signature
  function add(a: any, b?: any, c?: any): any { // (3) implement signature
    if (b) {
      if (c) {
        return a + b + c;
      }
      return a + b;
    }
    return a;
  }

  add(1, 2); // 오버로드 시그니처(1)로 실행됨
  add('a', 'b', 'c') // 오버로드 시그니처(2)로 실행됨
 * 주의할 점, (3) 구현부 타입은 절대 실현되지 않는다. 구현부는 모든 오버로드 시그니처를 포괄하는 타입일 뿐임. 
   add 함수가 실제로 받아올 수 있는 모든 인자타입과 모든 ReturnType을 적어주는 것 뿐임.
   

6. 제네릭 : 제함수 또는 클래스에서 사용되는 타입을 미리 지정하지 않고, 
   해당 함수 또는 클래스를 호출할 때 인자로 전달되는 값의 타입에 따라 동적으로 타입을 추론할 수 있다.

 - 수업 1
  1) 유니온 타입 쓰는 경우 : 매개변수가 유니온타입으로 되어있는데, 작성할 것이 계속 늘어날 수 있고 계속 늘어날 수도 있는 문제점
	
	function getSize(arr: number[] | string[] | boolean[] | object[]): number {
		return arr.length;
	}
	const arr1 = [1, 2, 3];
	getSize(arr1);

	const arr2 = ["a", "b", "c"];
	getSize(arr2);

	const arr3 = [false, true, false];
	getSize(arr3);

	const arr4 = [{}, {}, { name: "Tim" }];
	getSize(arr4);

  2) 제네릭을 쓰는 경우
    - <T>에서 T는 <ABCD>처럼 아무거나 써도 되고, T는 호출하는 쪽에서 정해서 호출해준다. (호출할 때 생략해도 됨. typescript가 알아서 추론함.)
	- 매개변수 arr: T[]에서 T[]는 배열타입이 온다는 것을 의미.
	- 즉, getSize<number>(arr1); 호출하면 T로 number가 넘어오고, getSize 선언문은 function getSize<number>(arr : number[]) {} 가 되는 것이다.
	  (위에 말했듯이, 호출할 때 제네릭 생략하고 getSize(arr1)로 호출해도 됨.)

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



 - 수업 2
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

  console.log("m1", m1);
  console.log('m2', m2);

  설명  
	1) 인터페이스에 제네릭 사용 (Mobile<T>), 인스턴스마다 option이 달라지므로 제네릭을 썼다.
	2) 인터페이스의 인스턴스를 생성할 때는, 제네릭으로 사용할 타입을 명시해줘야함.
	3) m1인스턴스의 경우에는 const m1: Mobile<object>도 되고, 타입을 세밀하게 확정하고 싶으면 Mobile<{ color: string; coupon: boolean }> 이런식으로 쓰면 됨.



 - 수업3
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

  showName(user);
  showName(car); // 컴파일 에러
  showName(book); // 컴파일 에러

  설명
	1) 제네릭 타입 매개변수 T와 extends 키워드를 사용하여 data 매개변수의 name 속성이 반드시 있어야 함을 명시하고 있다.
	2) 이를 통해 함수가 호출될 때 data 매개변수에 name 속성이 없는 객체를 전달하면 컴파일러가 오류를 발생시킴.
	3) 그러면 아래 두개는 같은거 아닌가?
	   
		function showName<T extends { name: string }>(data: T): string {
		 return data.name;
		}


		function showName(data: { name: string }): string {
			return data.name;
		}

	-> ChatGpt에서 설명
		두 함수는 기능적으로는 같습니다.
		하지만 첫 번째 함수는 TypeScript의 제네릭 타입 매개변수 T와 extends 키워드를 사용하여 data 매개변수의 name 속성이 반드시 있어야 함을 명시하고 있습니다. 이를 통해 함수가 호출될 때 data 매개변수에 name 속성이 없는 객체를 전달하면 컴파일러가 오류를 발생시킵니다.

		반면에 두 번째 함수는 data 매개변수의 타입을 명확하게 지정하여 name 속성이 없는 객체를 전달하면 컴파일러가 경고를 발생시키지 않습니다.
		따라서 첫 번째 함수는 타입 안정성을 보장하는 데 도움이 되며, 두 번째 함수는 단순히 name 속성이 있는 객체를 전달하는 경우에만 사용할 수 있습니다.
  

	-> But!, 내가 직접 해본 결과로는 둘다 컴파일에러가 발생함.