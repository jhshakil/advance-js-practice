// Practice 1

function Programmer(name, preferredLanguage) {
  // private property
  let privateName = name;

  Object.defineProperties(this, {
    name: {
      get: function () {
        return privateName;
      },
      set: function (newName) {
        if (!newName) {
          console.log("name cannot be empty");
          return;
        }

        privateName = newName;
      },
    },
  });

  // public property
  this.preferredLanguage = preferredLanguage;

  // public method
  this.writeCode = function () {
    console.log(`${privateName} in ${this.preferredLanguage}`);
  };

  // private method
  let drinkCoffee = function () {
    console.log("Gulp...");
  };

  // public method that use a colsure
  this.startDay = function () {
    drinkCoffee();
  };
}

const programmer = new Programmer("Jahid", "JavaScript");
console.log(programmer.name);
programmer.name = "Shakil";
console.log(programmer.name);
