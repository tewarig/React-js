const first = [1, 2, 3];
const second = [4, 5, 6];

//old
const combinedOld = first.concat(second);
//new
const combinedNew = [...first, ...second];
//to clone a array
const clone = [...first];
console.log(combinedOld);
console.log(combinedNew);

const firstName = {
  fname: "Gaurav",
};
const secondName = {
  lname: "Tewari",
};

const fullName = { ...firstName, ...secondName, location: "India" };
console.log(fullName);
