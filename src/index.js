setTimeout(() => console.log("Hello"), 1000);

let numbers = [1, 2, 3];
numbers.map(number => number * 2);

function greet(fn) {
    console.log(fn());
}

function sayHello() {
    return function() {
        return "Hello World";
    }
}