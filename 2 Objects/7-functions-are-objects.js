// practice 1
function add(num1, num2) {
  return num1 + num2;
}

const n = add;
console.log(n(2, 2));
console.log(add.length);

// practice 2
const programmerFunc = new Function(
  "name",
  `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in Javascript');
    }
    `
);

const programmer = new programmerFunc("Jahid");
programmer.writeCode();
console.log(programmer.name);

// practice 3
function createGroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.quantity} x ${this.name}`);
  };
}

const newItem = new createGroceryItem("Apple", 4);

function calculatePrice(createGroceryItem, price) {
  return price * createGroceryItem.quantity;
}

const preformCalculation = calculatePrice;
console.log(preformCalculation(newItem, 0.25));
