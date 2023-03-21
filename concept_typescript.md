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

	