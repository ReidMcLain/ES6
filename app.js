// naming my favorite movie and logging it to the console
let favMovie = (name = 'Reid McLain', movie = 'The Room') =>  console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie();

let getFirstName = (name) => { 
    console.log(name.split(" ")[0]);  // ["Reid", "McLain"]
}

let getFirstNameConsise = name => console.log(name.split(" ")[0]);

let doMath = (a, b) => {
    return {
        square: Math.pow(a, b),
        multiply: a * b
    }
};

let doneMath = doMath(2, 3)
console.log(`2 to the power of 3 is ${doneMath.square}, 3 times 2 is ${doneMath.multiply}`)

let parameters = (name, location, favFood) => console.log(name, location, favFood);

let arr = ["Reid", "Birmingham", "Zaxbys"]; 

parameters(...arr);

let myName = 'Reid';

function whateverYoudlike(string) {
    let array = [...string];
    for (let i = 0; i < array.length; i++) { 
        console.log(array[i]);
    }
}

whateverYoudlike(myName);