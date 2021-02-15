const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Wiliams";
mary.age = 30;

mary.getsMarried("Thompson");
console.log(mary.greeting());

// another syntax

const torrey = Object.create(personPrototypes, {
  firstName: { value: "Torrey" },
  lastName: { value: "Meade" },
  age: { value: 34 },
});

console.log(torrey);
console.log(torrey.greeting());
