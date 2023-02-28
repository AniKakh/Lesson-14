// Task 1


let myArr = [10, 20, 30, 40, 50, 50, 50, 60, 70, 80];
let sum = 10 + 20 + 30 + 40 + 50 + 50 + 50 + 60 + 70 + 80;

let arrLength = myArr.length;


console.log(myArr);
console.log(arrLength);
console.log(sum);

let avarage = sum / arrLength;

console.log(avarage);

// Task 2

const student = [
    {
        name: "Ani",
        age: 26,
    },
    {
        name: "Lela",
        age: 25,
    },
    {
        name: "Levani",
        age: 25,
    },
    {
        name: "Giorgi",
        age: 26,
    },
    {
        name: "Nino",
        age: 24,
    },
];

console.log(student);


// Task 3

let product = {
    productTitle: "Lenovo ThinkPad",
    productDescription: "Renowned for relentless innovation, trusted quality, and purposeful design—to help your business succeed.",
    productPrice: 1800,
    shopAddresses: ["Beijing", "NewYork", "Tbilisi"],
    roductMemoryInGB: 256,
    productResolution: "16-inch",
};

console.log(product);

// Task 4 

console.log(`Product name is ${product.productTitle}, product price is $${product.productPrice}, product resolution is ${product.productResolution} and you can buy it at ${product.shopAddresses[0]}.`);


