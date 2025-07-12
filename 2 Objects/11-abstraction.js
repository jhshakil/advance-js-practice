function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;

  // public method
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };

  //   private method
  const drinkCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  }.bind(this);

  //   public method
  this.startDay = function () {
    drinkCoffee();
  };
}

const programmer = new Programmer("jahid", "javascript");

programmer.writeCode();
programmer.startDay();
