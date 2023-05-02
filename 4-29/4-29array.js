// let x = [1, '2', true]
// index: 0, 1, 2
// element:1, '2', true

// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

// let array = [3, -1, 8, 0, 2];

// console.log(array.length);

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }

// console.log(sum)
let birthYear = [1994, 1998, 2003, 1993, 2001]

let sum = 2023;
let nas;
nas = sum - birthYear[0]
let niittoo = 0;
if(birthYear[0] % 2 ==0  ) { 
    niittoo = niittoo + 1
}

if (birthYear[1] % 2 ==0) {
    niittoo = niittoo + 1

    
}

console.log('niit tegsh too ni ' + niittoo);


console.log(birthYear[0]  + ' онд төрсөн хүн', nas + ' настай');






console.log(birthYear[1]  + ' онд төрсөн хүн')
console.log(sum - birthYear[1]  + ' настай')

console.log(birthYear[2]  + ' онд төрсөн хүн')
console.log(sum - birthYear[2]  + ' настай')

console.log(birthYear[3]  + ' онд төрсөн хүн')
console.log(sum - birthYear[3]  + ' настай')

console.log(birthYear[4]  + ' онд төрсөн хүн')
console.log(sum - birthYear[4]  + ' настай')