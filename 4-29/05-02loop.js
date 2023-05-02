// 1-10 хүртэлх тоог хэвлэ

// for (let index = 0; index <=1000; index++) {
//     console.log(index)
// }
// let counter = 0
// for (let index = 1; index <= 100; index++) {
//     if (index % 5 === 0 ) {
//         console.log(index)
//         counter++
        
//     }

// }
// console.log(' Ний тоо = ', counter)

// let array = [7, 8, 1, -5, 3]

// console.log('array урт',array.length);

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// let array = [7, 8, 1, -5, 3]

// for (let index = 0; index < array.length; index++) {

//     if (array[index] % 2 !== 0){
        
//         console.log(array[index])
//     } 

// }
// let array = [7, 8, 1, -5, 3]

// for (let index = 0; index < array.length; index++) {

//     if (array[index] % 2 === 0) {
//     console.log('тэгш тоо', array[index])
//     } 
// }

let array = [7, 8, 1, -5, 3]
let c = 0;

for (let index = 0; index < array.length; index++) {

    if (array[index] % 2 !== 0) {

      c = c + array[index]
      
    } 
    }
    console.log('Сондгой тооны нийлбэн = ', c )
    


