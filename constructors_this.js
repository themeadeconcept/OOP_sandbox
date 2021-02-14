// OBJECT LITERAL
// const torrey = {
//   name: "Torrey",
//   age: 34,
// };

// console.log(torrey);

// console.log(torrey.age);

// Person constructor (CONSTRUCTORS SHOULD START WITH A CAPITAL LETTER)
// this refers to the current instance of the object
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  //common method to calculate an age from a birthday
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const torrey = new Person("Torrey", 34);
// const meaghan = new Person("Meaghan", 100);

// console.log(torrey);
// console.log(meaghan.age);

const torrey = new Person("Torrey", "8-17-86");
console.log(torrey.calculateAge());
