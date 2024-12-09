// FizzBuzz

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("Fizz Buzz")
//     } else if(i % 3 === 0) {
//         console.log("Fizz")
//     } else if(i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

for(let i = 0; i <= 100; i++){
    let output = "";
    if(i % 3 === 0) output += "Fizz"
    if(i % 5 === 0) output += "Buzz"
    console.log(output || i);
}

// Prime Time
let n = 4;
let isPrime = false;

while(!isPrime) {
    n++;
    isPrime = true;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
}

console.log(n)

// Feeling Loppy

// let csvStr = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// let rows = csvStr.split("\n")

// for (let i = 0; i < rows.length; i++){
//     let cells = rows[i].split(",")

//     console.log(cells.join(", "))
// }

// let csvStr = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// let rows = csvStr.split("\n");

// let headers = rows[0].split(",");

// let data = [];
// for (let i = 1; i < rows.length; i++) {
//     let cells = rows[i].split(",");

//     let rowObject = {};
//     for (let j = 0; j < headers.length; j++) {
//         rowObject[headers[j]] = cells[j];
//     }

//     data.push(rowObject);
// }
// console.log(data);

let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let rows = csvStr.split("\n");

let columns = rows[0].split(",");

let data = [];

data.push(columns);

for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(",");

    data.push(cells);
}

console.log(data);
