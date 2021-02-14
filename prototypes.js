// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);

  //common method to calculate an age from a birthday
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Mayweather", "12-22-22");

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith");

console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));
