// 1-misol

// function mashq1 (arr) {
//     let sum = 0
//     for (const iterator of arr) {
//         if (iterator % 2 == 0) {
            
//             sum =  sum + iterator ** 2;
//         }
//     }
//     return sum
// }

// console.log(mashq1([1, 2, 3, 4]));

// 2-misol

// function mashq2 (arr) {
//     let err = []
//     for (const iterator of arr) {
//         err += `${iterator[0]}, `
//     }
//     return err
// }

// console.log(mashq2(["Olma", "Anor", "Kiwi"]));

// 3-misol

// function mashq3 (arr) {
//     let sum3 = 0;
//     for (const key in arr) {
//         sum3 += arr[key];
//     }
//     return sum3
// }

// console.log(mashq3({
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10
// }));

// 5-misol

function mashq5 (arg) {
    let sum5 = 1;
    for (let i = 1; i <= arg; i++) {
        if (i % 2 == 1) {
            sum5 *= i;
        }
    }
    return sum5
}

console.log(mashq5(5));