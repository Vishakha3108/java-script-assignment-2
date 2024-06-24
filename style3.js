/*You are working for an e-commerce client, and they provide you with an array of objects containing product names and their prices. You task is to creat a function that finds the product with the maximum amount (the higest price) and the product with the minimum amount and prints them to the console.*/

const products = [
    { name: "Laptop", price: 120000},
    { name: "Mobile", price: 70000},
     { name: "Laptop bag", price: 20000},
     { name: "Watch", price: 20000},
     {name: "Mobile Charger", price: 1500},
];

let maxProduct = { name: "", price: 0 };
let minProduct = {name: "", price: Number.MAX_VALUE}

for (let product of products) {
    if (product.price > maxProduct.price) {
        maxProduct = product;
    }
    if (product.price < minProduct.price) {
        minProduct = product;
    }
}

console.log(`The product with maximum ammount is ${maxProduct.name} Which is priced at Rs. ${maxProduct.price}`);
console.log(`The product with minimum ammount is ${minProduct.name} Which is priced at Rs. ${minProduct.price}`);
