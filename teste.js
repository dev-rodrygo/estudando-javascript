const array1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = array1.map((x) => x * 10)

console.log(map1)
// Expected output: Array [2, 8, 18, 32]

array1.forEach((x) => console.log(x))
