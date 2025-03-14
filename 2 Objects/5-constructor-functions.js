function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };
  this.drinksCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  };
}

const newProgrammer = new Programmer("Jahid", "JavaScript");

newProgrammer.writeCode();

function createGroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const newItem = new createGroceryItem("Apple", 4);

newItem.display();
