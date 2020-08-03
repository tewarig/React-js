const person = {
  name: "Gaurav",
  walk: function () {
    console.log(this);
  },
};
person.walk();
//calling as a method

//functions are object in js ;)
const walk = person.walk.bind(person);
walk();
