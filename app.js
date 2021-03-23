console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
        console.log(`${this.name},${this.pets},${this.residence},${this.hobbies}`);
    }

    greeting() {
        console.log("Hi!");
    }
}class Coder extends Person {
    constructor (name,pets,residence,hobbies){
        super(name,pets,residence,hobbies);
        this.occupation = "Full Stack Web Developer";
    
    }
    greeting() {
        console.log ("Hi TrueCoder!");
    }
}
const Taj = new Person ("Taj",1,"Alabama",["drums","drawing"]);
const Xavier = new Coder ("Xavier",1,"Alabama", ["music","cars"]);
console.log(Taj.info());
console.log(Xavier.info());