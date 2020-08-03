// const person = {
//   talk() {
//     var self = this;
//     setInterval(function () {
//       console.log("self", self);
//     }, 1000);
//   },
// };
const person = {
  talk() {
    setInterval(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
