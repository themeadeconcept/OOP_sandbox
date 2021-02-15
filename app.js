class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lasttName}`;
  }
}

const mary = new Person("Mary", "Mayweather", "11-13-80");

console.log(mary.greeting());
