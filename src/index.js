const person = { 
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    } 
};

const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
updated.address.city = "New York";
console.log(person);
console.log(updated);

const spread = {...person, name: "Bobby"}; // SPREAD OPERATOR SYNTAX
const objectAssign = Object.assign({}, person, { name: "Bob", age: 30 }); // OBJECT.ASSIGN
console.log(spread);
console.log(objectAssign);