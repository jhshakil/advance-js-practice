let programmer = {
  name: "Jahid",
  preferredLanguage: "JavaScript",
  writeCode: function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  },
  drinkCoffee: function () {
    console.log(`${this.name} drinks coffee`);
  },
};

function createProgrammer(name, preferredLanguage) {
  return {
    name,
    preferredLanguage,
    writeCode() {
      console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    },
    drinkCoffee() {
      console.log(`${this.name} drinks coffee`);
    },
  };
}

const newProgrammer = createProgrammer("Alice", "JavaScript");

newProgrammer.writeCode();

function createGroceryItem(name, quantity) {
  return {
    name,
    quantity,
    display() {
      console.log(`${this.quantity} x ${this.name}`);
    },
  };
}

const newItem = createGroceryItem("Rice", 4);

newItem.display();
