"use strict";
// Basic types
let id = 7;
let company = "Amazon";
let isPublished = true;
let X = 5;
X = true;
let age;
age = 5;
// Arrays
let ids = [1, 2, 3];
let arr = [1, 2, "hello", true, 1.5, X];
// tuples
let person = [1, "Chris", true];
// tuple array(exact types in the array)
let employee = [[1, "bradDon"], [2, "james"], [3, "vlad"]];
// Union
let pid;
pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = { id: 1, name: "frank"
};
// type assertions
let cid = 1;
// let customerId= <number>cid
let customerId = cid;
customerId = 3;
// functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
log(["hello", "hi"]);
const user1 = { id: 1, name: "frank"
};
const add = (x, y) => { return x + y; };
const sub = (x, y) => { return x - y; };
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered  `;
    }
}
const brad = new Person(1, "brad");
