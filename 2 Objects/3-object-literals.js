const groceryItem = {
  name: "Apples",
  quantity: 4,
  display() {
    console.log(`${this.quantity} x ${this.name}`);
  },
};

groceryItem.display();
