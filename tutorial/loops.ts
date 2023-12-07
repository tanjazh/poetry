
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i < .1; i += 0.01) {
//     console.log(i)
// }


// let i = 0;
// while (true) {
//     if (i >= 10) {
//         break
//     }
//     console.log(i)
//     i++
// }




function isEven(i: number): boolean {
    return i % 2 == 0
}

function isOdd(i: number): boolean {
    return !isEven(i)
}

for (let i = 0; i < 10; i++) {
    console.log(`${i} before`)
    if (isEven(i)) {
        continue
    }
    console.log(`${i} after`)
}


// const names = ["Rafael", "Tanja", "Sara", "Shirin"]

// for (let i = 0; i < names.length; i++) {
//     const name = names[i]
//     console.log(name)
// }

