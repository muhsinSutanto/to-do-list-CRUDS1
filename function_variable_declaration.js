// function
function calculateTax(price) {
    let tax = 10 / 100 * price
    return tax
}

// variable function
var calculateTax = function (price) {
    let tax = 10 / 100 * price
    return tax
}

// arrow function
var calculateTax = (price) => {
    let tax = 10 / 100 * price
    return tax
}

// var VS let VS const ---------------------------------------------
// var
// 1.can be redeclared
var varVariable = "Hi"
var varVariable = "Hoi"

// 2. Can be updated
varVariable = "cuy"

// 3. Global Scope
var num = 2

if (num === 2) {
    var varVariable2 = "Halu"
}

// console.log(varVariable2)

// let
// 1.cannot be redeclared
let letVariable = "Hi"

// 2. Can be updated
letVariable = "cuy"

// 3. Block Scope
var num = 2

if (num === 2) {
    let letVariable2 = "Halu"
    // console.log(letVariable2)
}

// const
// 1. Cannot be redeclared/updated
const constVariable = 22/7

// 2. Block Scoped
var num = 2

if (num === 2) {
    const constVariable2 = "Halu"
    console.log(constVariable2)
}








