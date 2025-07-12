let user = {
  name: "Jahid",
  surname: "Hasan",
  email: "jhshakil11275@gmail.com",
  isActive: true,

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  login() {
    console.log(`${this.fullName} logged in`);
  },
  logout() {
    console.log(`${this.fullName} logged out`);
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,

  manageUsers() {
    console.log(`${this.fullName} is managing users`);
  },
};

// admin.__proto__ = user;

let guest = {
  __proto__: user,
  isGuest: true,
  browseContent() {
    console.log(`${this.fullName} is browsing content.`);
  },
};

let superAdmin = {
  __proto__: admin,
  isSuperAdmin: true,
  manageAdmins() {
    console.log(`${this.fullName} is managing admins.`);
  },
};

admin.fullName = "Mehedi Hasan";
console.log(admin.fullName);
console.log(user.fullName);

for (let key in admin) {
  console.log(key);
}

console.log(Object.keys(admin));

const programmerPrototype = {
  writeCode: function () {
    console.log(`writing code in ${this.preferredLanguage}`);
  },
  drinkCoffee: function () {
    console.log("Drinking coffee");
  },
};

function Programmer(name, preferredLanguage) {
  let privateName = name;
  this.preferredLanguage = preferredLanguage;

  Object.defineProperties(this, {
    name: {
      get: function () {
        return privateName;
      },
      set: function (newName) {
        privateName = newName;
      },
    },
  });
  Object.setPrototypeOf(this, programmerPrototype);
}

const jsProgrammer = new Programmer("Shakil", "Javascript");

jsProgrammer.writeCode();
jsProgrammer.drinkCoffee();
console.log(jsProgrammer.name);
jsProgrammer.name = "Rakib";
console.log(jsProgrammer.name);
