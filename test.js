let array = ["Deris", "Rifki"]
let angka = [400,300]
let result = []
let nama = "Rifki"
let index = ""
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (nama !== element){
        result.push(element)
    } else {
        index = i
    }
}

result.unshift(nama)
let angkaBaru = []
for (let i = 0; i < angka.length; i++) {
    if (angka[index] !== angka[i]) {
        angkaBaru.push(angka[i])
    }
    
}
angkaBaru.unshift(500)
console.log(angkaBaru);
// console.log(result);
// console.log(index);

let hasil = result

console.log(hasil);