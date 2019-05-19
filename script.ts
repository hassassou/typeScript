class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, type: string, age: number) {
        this.name = name;
        this.type = type;
        this.age = age;
    }

    printAge() {
        console.log(this.getAge());
    }

    public getName = () => this.name;
    public setName = (name: string) => this.name = name;

    public getType = () => this.type;
    public setType = (type: string) => this.type = type;

    public getAge = () => this.age;
    public setAge = (age: number) => this.age = age;
}

class Hassa extends Person {
    name = "HASSA";
    age = 45;

    constructor() {
        super("Mohamed", "M", 25);
    }
}

const hassa = new Hassa();
hassa.printAge();

const person = new Person('HASSA', 'M', 25);
// console.log(person);
// console.log(person.printAge());

const person0 = new Person("Kamal", "M", 42);
console.log(person0);
console.log(person0.getName());
console.log(person0.getType());
console.log(person0.getAge());
person0.setName("Kamal Kamali");
person0.setType("MH");
person0.setAge(50);
console.log(person0.getName());
console.log(person0.getType());
console.log(person0.getAge());

class Plant {
    // the good way to create an argument private.
    private _species: string;

    constructor(species: string) {
        this._species = species;
    }

    // the good way to create a setter
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }

    // the good way to create a getter
    get species() {
        return this._species;
    }
}

const plant = new Plant("");
console.log(plant);
plant.species = "Species";
console.log(plant.species);

// static properties and methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(12));

// Abstract Classes
abstract class Project {
    name: string = "Default";
    budget: number = 10;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }

    abstract changeName(name: string): void;

    calcBudget(): number {
        return this.budget;
    }
}

class Robot extends Project {

    constructor(name: string, budget: number) {
        super(name, budget);
    }

    changeName(name: string): void {
        this.name = "Robot";
    }

    calcBudget(): number {
        return this.budget * 2;
    }
}

const robot = new Robot("Robot", 12450);
console.log(robot.calcBudget())

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("Wrong Declaration of this class");
let right = OnlyOne.getInstance();


// var str: string = "It works";
// let num: number = 25;
// let is_active: boolean = true;
//
//
//
// function f():void {
//     console.log("Str : ", str);
//     console.log("Num : ", num);
// }
//
// f();
//
// const manu = (name:string) => console.log(name);
//
// manu("Manu");
//
// const userData = {d1: "data1", d2: "data2", d3: 40};
// const {d1:d1, d3:d3} = userData;
// console.log(d1, d3);
//
// const fff = `Hello There.
// my data is ${d1}.
// Okey
// `;
//
// console.log(fff);