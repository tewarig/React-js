const person = {
  name: "Gaurav",
  walk: function () {},
  talk() {},
};

person.talk();
person.name = ".";
console.log(person.name);

const targetMember = "name";
person["name"] = "John";
