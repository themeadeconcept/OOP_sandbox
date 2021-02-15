// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Sucstomer constructor
function Customer(firstName, lastName, phone, membership) {
  //will inherit the Person Constructor
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Jackson", "222-323-1411", "Standard");

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
