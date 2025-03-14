const person = {
  name: "Jahid",
};

console.log(person);

person.favoriteFood = "Mango";

console.log(person);

person["favoriteIceCream"] = "chocolate";

console.log(person);

delete person.favoriteIceCream;

console.log(person);

person.eat = function () {
  console.log(`${this.name} eats ${this.favoriteFood}`);
};

person.eat();

// Practice 2

function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const newItem = new GroceryItem("Banana", 5);
newItem.groceryAisle = "Produce";
console.log(newItem);
