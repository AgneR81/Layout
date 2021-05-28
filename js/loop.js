// Ciklai. For ir while
// Ciklai reikalingi, atkartoti kažkokį kodą, kažkiek kartu

let num = 0

// While tikrina reikšmę prieš operaciją

// while (num < 5) {
//     console.log(num);
//     num++;
// }
// ^-- Iteracija

// do while tikrina reikšmę po kiekvienos operacijos

// do {
//     console.log(num);
//     num++;
// } while (num < 0);


// For ciklas: steps ir tikrina reikšmę prieš operaciją | Papilomi nustatymai
let num2 = ['1', '2'];


// 1              // 2         // 4
for (let i = 0; i < num2.length; i++) {

    // 3
    //   console.log(num2[i]);
}

// Direktyva:
// break - Jei true sustabdo.
// continue - Jei true praleidžia.

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        continue;
    }
    //  console.log(i);
}


const area = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];



for (let i = 0; i < area.length; i++) {
    let size = area[i];
    for (let x = 0; x < size.length; x++) {
        console.log(size[x]);
    }
}