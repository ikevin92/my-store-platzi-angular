const username: string = 'Kevin';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const kevin = new Person(29, 'Echeverri');
kevin.lastName;
