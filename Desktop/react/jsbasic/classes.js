class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

const person1 = new Person("Gaurav");

class Teachers extends Person {
  constructor(name, degree) {
    //super givers refreance to the parent class
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teachers("someone", "Btech");
