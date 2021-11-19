// Task 1
let arr = [];
for (let i = 0; i < Math.random() * 10; i++) {
    arr.push(Math.random());
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
}

// Task 2
let a = [12, true, 'lorem', undefined, -0.63];

// // for (let x = 0; x < a.length; x++) {
// //     for (let i of p) {
// //         i.innerHTML = a[x];
// //     }
// // }

// for (let i of a) {
//     for (let x of p) {
//         // if (x.innerHTML === '') {
//         //     x.innerHTML = i;
//         // } else {
//         //     continue
//         // }
//         for (let y = 0; y < a.length; y++) {
//             if (x.innerHTML === a[0]) {
//                 continue
//             } else {
//                 x.innerHTML = i
//             }
//         }
//     }
// }

function Write(x, y) {
    let p = document.querySelectorAll('#text' + x);
    for (let r of p) {
        r.innerHTML = y;
    }
}

for (let i = 1; i <= a.length; i++) {
    Write(i, a[i - 1])
}