"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, type, age) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.setName = function (name) { return _this.name = name; };
        this.getType = function () { return _this.type; };
        this.setType = function (type) { return _this.type = type; };
        this.getAge = function () { return _this.age; };
        this.setAge = function (age) { return _this.age = age; };
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.getAge());
    };
    return Person;
}());
var Hassa = /** @class */ (function (_super) {
    __extends(Hassa, _super);
    function Hassa() {
        var _this = _super.call(this, "Mohamed", "M", 25) || this;
        _this.name = "HASSA";
        _this.age = 45;
        return _this;
    }
    return Hassa;
}(Person));
var hassa = new Hassa();
hassa.printAge();
var person = new Person('HASSA', 'M', 25);
// console.log(person);
// console.log(person.printAge());
var person0 = new Person("Kamal", "M", 42);
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
var Plant = /** @class */ (function () {
    function Plant(species) {
        this._species = species;
    }
    Object.defineProperty(Plant.prototype, "species", {
        // the good way to create a getter
        get: function () {
            return this._species;
        },
        // the good way to create a setter
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant("");
console.log(plant);
plant.species = "Species";
console.log(plant.species);
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(12));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project(name, budget) {
        this.name = "Default";
        this.budget = 10;
        this.name = name;
        this.budget = budget;
    }
    Project.prototype.calcBudget = function () {
        return this.budget;
    };
    return Project;
}());
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot(name, budget) {
        return _super.call(this, name, budget) || this;
    }
    Robot.prototype.changeName = function (name) {
        this.name = "Robot";
    };
    Robot.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Robot;
}(Project));
var robot = new Robot("Robot", 12450);
console.log(robot.calcBudget());
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("Wrong Declaration of this class");
var right = OnlyOne.getInstance();
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
