import React from 'react';

const UtilityType = () => {
	interface User {
		id: number;
		name: string;
		age: number;
		gender: 'm' | 'f';
		color?: string;
	}

	// keyof : interface의 key값만 뽑아 type으로 쓰기
	// type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
	// const uk: UserKey = 'color'; // 컴파일 에러
	// const uk: UserKey = 'id' // 가능, UserKey에 해당하는 것만 가능

	// Partial<T>
	// 프로퍼티를 모두 옵셔널로 바꿔준다. 일부만 사용하는게 가능해진다.
	// 인스턴스를 만들떄, 해당 클래스를 Partial<interface>하면 그 인터페이스의 프로퍼티들은 옵셔널로 된다.

	// let admin: Partial<User> = {
	// 	id: 1,
	// 	name: 'Bob',
	// };
	// 위에 Partial<User>과 같음
	// interface User {
	//   id? : number;
	//   name?: string;
	//   age?: number;
	//   gender?: 'm' | 'f';
	// }

	// Required<T> : 프로퍼티들을 모두 필수로 바꿔준다.
	// let admin: Required<User> = {
	// 	id: 1,
	// 	name: 'Bob',
	// 	age: 23,
	// 	gender: 'm',
	// 	color: 'wthie', // User 인터페이스에서 옵셔널이지만, 무조건 넣도록 됨.
	// };

	// Readonly<T> : 프로퍼티들을 모두 읽기전용
	// let admin: Readonly<User> = {
	// 	id: 1,
	// 	name: 'Bob',
	// 	age: 23,
	// 	gender: 'm',
	// }
	// admin.id = 4; // Readonly이므로 수정 불가

	// Record<K,T> : K에 들어간 것들만 인스턴스의 키값으로 쓸 수 있고, T 타입들만 인스턴스의 값으로 쓸 수 있다.
	// * K : key, T : 값

	// 예제1
	// type Grade = '1' | '2' | '3' | '4';
	// type Score = 'A' | 'B' | 'C' | 'D' | 'F';

	// const score: Record<Grade, Score> = {
	// 	1: 'A',
	// 	2: 'C',
	// 	3: 'B',
	// 	4: 'D',
	// };

	// 예제2 : result인스턴스의 key값을 User인터페이스의 keyof로하고, 그 인스턴스의 값은 boolean타입
	// interface User2 {
	// 	id: number;
	// 	name: string;
	// 	age: number;
	// }
	// function isValid(user: User2) {
	// 	const result: Record<keyof User2, boolean> = {
	// 		id: user.id > 0,
	// 		name: user.name !== '',
	// 		age: user.age > 0,
	// 	};
	// 	return result;
	// }

	// Pick<T, K> : T타입에서 K프로퍼티만 골라서 쓸 수 있다. K에 들어가지 않은 프로퍼티는 안써도 되기 때문에 옵셔널이랑 비슷
	// interface User3 {
	// 	id: number;
	// 	name: string;
	// 	age: number;
	// 	gender: 'M' | 'W';
	// }
	// const admin: Pick<User3, 'id' | 'name'> = {
	// 	id: 0,
	// 	name: 'Bob',
	// };

	// Omit<T, K>
	// Pick<T, K>와 반대
	// T타입에서 K프로퍼티만 골라서 안 쓸 수 있다. K에 들어간 프로퍼티는 안써도 되기 때문에 옵셔널이랑 비슷
	// interface User3 {
	// 	id: number;
	// 	name: string;
	// 	age: number;
	// 	gender: 'M' | 'W';
	// }
	// const admin: Omit<User3, 'age' | 'gender'> = {
	// 	id: 0,
	// 	name: 'Bob',
	// };

	//Exclude<T1,T2>
	// T1 타입에서 T2 타입과 겹치는 타입을 제외하고 쓸 수 있다.
	// Omit과 다른점 : Omit은 프로퍼티를 제외하는 것이고, Exclude는 타입을 제외하는 것
	// type T1 = string | number | boolean;
	// type T2 = Exclude<T1, number | string>; // boolean만 남는다

	// NonNullable<Type> : null과 undfiend을 제외한 타입을 생성한다.
	// type T1 = string | null | undefined | void;
	// type T2 = NonNullable<T1>; // string과 void만 남는다

	return <div></div>;
};

export default UtilityType;
