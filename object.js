// Object
const person = {
  name: "Settha",
  party: "ForThailand",
};

// console.log(person.name, person.party);

// * Review reference Type

// const person2 = person;
// person2.name = "Chonlanan";

// console.log("person1:", person);
// console.log("person2:", person2);

//  * Array of Oject: data from fetching data

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((data, index) => {
  console.log("Person", index + 1);
  console.log("name:", data.name);
  console.log("age:", data.age);
  console.log("job:", data.job);
  console.log("-------------------");
});
