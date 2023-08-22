// Wrong
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}

// Right
interface Momemt {
  utcOffset(): number;
  utcOffset(b: number | string): Momemt;
}

// --------------

type SumInput = (string | number)[];
function unionSum(a: SumInput, b: SumInput): number {
  return parseInt(`${a}`, 10) + parseInt(`${b}`, 10);
}

type Person = {
  age: number;
  name: string;
  [anyKey: string]: string | number | boolean;
};
const thuta: Person = {
  age: 21,
  name: 'Thutasann',
  city: 'yangon',
  isMale: true,
};

// --------------

type Student = {
  age: number;
  name: string;
  study: () => void;
  type: 'student';
};
type Dog = {
  age: number;
  name: string;
  bark: () => void;
  type: 'dot';
};

function makeNoise(dogOrStudent: Dog | Student): void {
  switch (dogOrStudent.type) {
    case 'dot':
      dogOrStudent.bark();
      break;
    case 'student':
      dogOrStudent.study();
      break;
    default:
      break;
  }
}

// --------------

class StudentClass {
  age: number;
  name: string;
  study: () => void;
  type: 'student';

  constructor(age: number, name: string, study: () => void, type: 'student') {
    this.age = age;
    this.name = name;
    this.study = study;
    this.type = type;
  }
}

class DogClass {
  age: number;
  name: string;
  bark: () => void;
  type: 'dog';

  constructor(age: number, name: string, bark: () => void, type: 'dog') {
    this.age = age;
    this.name = name;
    this.bark = bark;
    this.type = type;
  }
}

function classMakeNoise(StudentOrDog: StudentClass | DogClass): void {
  switch (StudentOrDog.type) {
    case 'dog':
      StudentOrDog.bark();
      break;
    case 'student':
      StudentOrDog.study();
      break;
    default:
      break;
  }
}
