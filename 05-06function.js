// function print_name() {
//     console.log("Hello")
// }
// print_name()
// print_name()
// print_name()
// print_name()

// function add_numbers(a, b) {
//     let sum = 0;

//     sum = a + b;

//     console.log(sum);
// }

// add_numbers(4, 5)
// add_numbers(55, 5)
// add_numbers(25, 5)
// add_numbers(15, 5)

// function tegsh_too_oloh(a, b) {
//     if (a % 2 === 0 && b % 2 ===0) {
//         console.log(a, b);
//     } else if (a % 2 === 0) {
//         console.log(a);
//     } else if (b % 2 === 0) 
//         console.log(b);
//     else {
//         console.log("Tegsh too algoo")
//     }
// }

// tegsh_too_oloh(1, 3)

// function hevleh() {
//     for (let i = 0; i <= 100; i++ ) {
//         console.log(i);
//     }
// }

// hevleh()

// function print_random() {
//     let a = prompt("Toogoo bich")
//     for (let i = a; i <= 100; i++) {
//         console.log(i)
//     }
// }

// print_random()

let array = [2, 6, 7, 9, -3];

// function tegsh_elements(array) {
    
//     for (let index = 0; index < array.length; index++) {
//         if(array[index] % 2 === 0) {
//             console.log(array[index]);
//         }
        
        
//     }
// }

// tegsh_elements(array);


let sum = 0;

function sondgoi_elements(array) {
    
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 !== 0) {
            sum = sum + array[index];
        }
    }
    console.log(sum);
}

sondgoi_elements(array);